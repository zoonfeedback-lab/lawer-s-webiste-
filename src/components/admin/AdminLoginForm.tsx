'use client';

import { useActionState } from 'react';
import { loginAdmin } from '@/actions/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Lock, ShieldCheck, Mail, Eye, EyeOff } from 'lucide-react';

const initialState = { success: false, message: '' };

export default function AdminLoginForm() {
  const [state, formAction, isPending] = useActionState(loginAdmin, initialState);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.refresh();
    }
  }, [state?.success, router]);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-600/30">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Admin Portal</h1>
          <p className="text-slate-400">Enter your email and password to access</p>
        </div>

        <form action={formAction} className="bg-slate-800 border border-slate-700 rounded-2xl p-8 space-y-6 shadow-xl">
          {state?.message && !state?.success && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm font-medium text-center">
              {state.message}
            </div>
          )}

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="admin@basitlegal.com"
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter admin password"
                  className="w-full h-12 pl-11 pr-12 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full h-12 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors disabled:opacity-60 shadow-lg shadow-blue-600/20"
          >
            {isPending ? 'Authenticating...' : 'Access Dashboard'}
          </button>
        </form>

        <p className="text-center text-slate-600 text-xs mt-6">
          Basit Legal &mdash; Secure Admin Access
        </p>
      </div>
    </div>
  );
}
