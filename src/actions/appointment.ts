'use server'

import { z } from 'zod'
import prisma from '@/lib/prisma'
import { uploadToCloudinary } from '@/lib/cloudinary'

const schema = z.object({
  fullName: z.string().min(2, "Name is required"),
  cnic: z.string().min(13, "Valid CNIC is required"),
  whatsapp: z.string().min(10, "Valid WhatsApp number is required"),
  email: z.string().email("Invalid email format").or(z.literal('')),
  serviceType: z.string().min(2, "Please select a service type"),
  date: z.string().min(2, "Please choose a date"),
  description: z.string().optional()
})

export async function submitAppointment(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  
  const validatedFields = schema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors below to continue."
    }
  }

  let documentUrl = null;
  const file = data.documents as File | null;
  
  if (file && file.size > 0 && file.name && file.name !== 'undefined') {
    try {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64Str = `data:${file.type};base64,${buffer.toString('base64')}`;
      documentUrl = await uploadToCloudinary(base64Str, 'appointments');
    } catch (e) {
      console.error("File upload error", e)
    }
  }

  try {
    await prisma.appointment.create({
      data: {
        fullName: validatedFields.data.fullName,
        cnic: validatedFields.data.cnic,
        phone: validatedFields.data.whatsapp,
        email: validatedFields.data.email || "",
        serviceType: validatedFields.data.serviceType,
        date: validatedFields.data.date,
        time: "TBD", // Assuming frontend handles this or omitted
        description: validatedFields.data.description || "",
        documentUrl: documentUrl
      }
    });
  } catch (error) {
    console.error("DB Insert Error", error);
    return {
      success: false,
      message: "Database insertion failed."
    }
  }

  return {
    success: true,
    message: "Appointment request submitted successfully. We will contact you via WhatsApp shortly to confirm the timing."
  }
}
