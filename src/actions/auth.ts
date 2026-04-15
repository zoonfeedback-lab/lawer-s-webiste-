'use server';

import { cookies } from 'next/headers';
import crypto from 'crypto';

function hashToken(password: string, secret: string): string {
  return crypto.createHmac('sha256', secret).update(password).digest('hex');
}

export async function loginAdmin(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const envEmail = process.env.ADMIN_EMAIL;
  const envPassword = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET || 'fallback-secret';

  if (!email || !password || email !== envEmail || password !== envPassword) {
    return { success: false, message: 'Invalid email or password. Access denied.' };
  }

  const token = hashToken(password, secret);
  const cookieStore = await cookies();
  
  cookieStore.set('admin_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
  });

  return { success: true, message: 'Login successful.' };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_session');
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const envPassword = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET || 'fallback-secret';
  
  if (!envPassword) return false;

  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('admin_session')?.value;

  if (!sessionToken) return false;

  const expectedToken = hashToken(envPassword, secret);
  return sessionToken === expectedToken;
}
