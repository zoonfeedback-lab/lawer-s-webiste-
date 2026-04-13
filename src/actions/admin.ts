'use server'

import prisma from '@/lib/prisma'
import { uploadToCloudinary } from '@/lib/cloudinary'
import { revalidatePath } from 'next/cache'

// Apppointments
export async function getAppointments() {
  return await prisma.appointment.findMany({
    orderBy: { createdAt: 'desc' }
  });
}

export async function updateAppointmentStatus(id: string, status: string) {
  await prisma.appointment.update({
    where: { id },
    data: { status }
  });
  revalidatePath('/admin/appointments');
}

// Portfolio Cases
export async function getPortfolioCases() {
  return await prisma.portfolioCase.findMany({
    orderBy: { createdAt: 'desc' }
  });
}

export async function createPortfolioCase(formData: FormData) {
  const title = formData.get('title') as string;
  const industry = formData.get('industry') as string;
  const year = formData.get('year') as string;
  const clientType = formData.get('clientType') as string;
  const challenge = formData.get('challenge') as string;
  const solution = formData.get('solution') as string;
  const result = formData.get('result') as string;
  
  // Tag processing
  const tagsStr = formData.get('tags') as string;
  const tags = tagsStr ? tagsStr.split(',').map(t => t.trim()) : [];

  // Assuming file is passed for Image
  let imageUrl = null;
  const file = formData.get('image') as File | null;
  if (file && file.size > 0 && file.name && file.name !== 'undefined') {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Str = `data:${file.type};base64,${buffer.toString('base64')}`;
    imageUrl = await uploadToCloudinary(base64Str, 'portfolio');
    // Using Cloudinary URL as one of the tags to mock image feature for array mapping if needed
    if (imageUrl) tags.push(`img:${imageUrl}`);
  }

  await prisma.portfolioCase.create({
    data: {
      title, industry, year, clientType, challenge, solution, result, tags
    }
  });

  revalidatePath('/admin/portfolio');
}

// Dashboard Overview Data
export async function getDashboardStats() {
  const [appointmentsCount, clientsCount, casesCount] = await Promise.all([
    prisma.appointment.count(),
    prisma.client.count(),
    prisma.portfolioCase.count()
  ]);

  return { appointmentsCount, clientsCount, casesCount };
}
