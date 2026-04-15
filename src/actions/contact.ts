'use server';

import prisma from '@/lib/prisma';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  contactInfo: z.string().min(5, "Contact info must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContact(prevState: any, formData: FormData) {
  try {
    const rawData = {
      name: formData.get('name') as string,
      contactInfo: formData.get('contactInfo') as string,
      message: formData.get('message') as string,
    };

    const validatedData = schema.safeParse(rawData);

    if (!validatedData.success) {
      return {
        success: false,
        message: 'Please resolve errors to continue.',
        errors: validatedData.error.flatten().fieldErrors,
      };
    }

    await prisma.contactMessage.create({
      data: validatedData.data,
    });

    return {
      success: true,
      message: 'Your message has been successfully sent. We will get back to you shortly.',
    };
  } catch (error) {
    console.error('Contact submission error:', error);
    return {
      success: false,
      message: 'An error occurred while sending your message. Please try again.',
    };
  }
}
