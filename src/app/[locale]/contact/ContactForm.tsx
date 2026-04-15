'use client';

import { useActionState } from 'react';
import { submitContact } from '@/actions/contact';
import { CheckCircle } from 'lucide-react';

const initialState = {
  success: false,
  message: '',
  errors: {}
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  if (state?.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center h-full flex flex-col justify-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-900 mb-2">Message Sent</h3>
        <p className="text-green-700">{state.message}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-8 bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      {state?.success === false && state?.message && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium">
          {state.message}
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
        <input 
          name="name"
          type="text" 
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-900 text-slate-900 bg-white" 
          placeholder="Your Name" 
          required 
        />
        {state?.errors?.name && <p className="text-red-500 text-xs mt-1">{state.errors.name[0]}</p>}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Email or Phone</label>
        <input 
          name="contactInfo"
          type="text" 
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-900 text-slate-900 bg-white" 
          placeholder="Contact Info" 
          required 
        />
        {state?.errors?.contactInfo && <p className="text-red-500 text-xs mt-1">{state.errors.contactInfo[0]}</p>}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
        <textarea 
          name="message"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-900 min-h-[120px] text-slate-900 bg-white" 
          placeholder="How can we help you?"
          required
        ></textarea>
        {state?.errors?.message && <p className="text-red-500 text-xs mt-1">{state.errors.message[0]}</p>}
      </div>
      
      <button 
        type="submit" 
        disabled={isPending}
        className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-70"
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
