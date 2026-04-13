'use server'

import { z } from 'zod'

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

  // Simulate backend processing (DB insert, email sending etc)
  await new Promise(resolve => setTimeout(resolve, 1500));

  // For file uploads, data.documents would be a File object.
  // We omit processing here for demonstration purposes.
  
  return {
    success: true,
    message: "Appointment request submitted successfully. We will contact you via WhatsApp shortly to confirm the timing."
  }
}
