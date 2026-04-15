'use client';

import { useState, useActionState } from 'react';
import { submitAppointment } from '@/actions/appointment';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { CalendarIcon, FileUp, CheckCircle } from 'lucide-react';

const initialState = {
  success: false,
  message: '',
  errors: {}
};

export default function AppointmentForm({ isUrdu }: { isUrdu: boolean }) {
  const [state, formAction, isPending] = useActionState(submitAppointment, initialState);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  if (state?.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-900 mb-2">
          {isUrdu ? 'درخواست جمع ہو گئی' : 'Request Submitted'}
        </h3>
        <p className="text-green-700">
          {state.message}
        </p>
        <Button className="mt-8 bg-green-700 hover:bg-green-800" onClick={() => window.location.reload()}>
          {isUrdu ? 'نئی درخواست' : 'Book Another Appointment'}
        </Button>
      </div>
    );
  }

  return (
    <form action={formAction} className={`space-y-6 ${isUrdu ? 'rtl font-urdu' : 'ltr font-sans'}`} dir={isUrdu ? 'rtl' : 'ltr'}>
      {state?.success === false && state?.message && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium">
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">{isUrdu ? 'پورا نام' : 'Full Name'} *</label>
          <Input name="fullName" placeholder="Advocate Muhammad Basit" required />
          {state?.errors?.fullName && <p className="text-red-500 text-xs">{state.errors.fullName[0]}</p>}
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">{isUrdu ? 'شناختی کارڈ نمبر' : 'CNIC Number'} *</label>
          <Input name="cnic" placeholder="12345-1234567-1" required />
          {state?.errors?.cnic && <p className="text-red-500 text-xs">{state.errors.cnic[0]}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">{isUrdu ? 'واٹس ایپ نمبر' : 'WhatsApp Number'} *</label>
          <Input name="whatsapp" placeholder="0300-1234567" required />
          {state?.errors?.whatsapp && <p className="text-red-500 text-xs">{state.errors.whatsapp[0]}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">{isUrdu ? 'ای میل ایڈریس' : 'Email Address'}</label>
          <Input name="email" type="email" placeholder="client@business.com" />
          {state?.errors?.email && <p className="text-red-500 text-xs">{state.errors.email[0]}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">{isUrdu ? 'سروس کی قسم' : 'Service Type'} *</label>
        <div className="relative">
          <select 
            name="serviceType"
            className="flex h-12 w-full appearance-none rounded-lg border border-slate-200 bg-white text-slate-900 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 transition-shadow disabled:opacity-50"
            required
            defaultValue=""
          >
            <option value="" disabled>{isUrdu ? 'منتخب کریں...' : 'Select service...'}</option>
            <option value="SECP Registration">SECP Company Registration</option>
            <option value="FBR Filing">FBR Tax Filing & Returns</option>
            <option value="Banking Facility">Banking Facilitation</option>
            <option value="EOBI Registration">EOBI / PESSI Compliance</option>
            <option value="Other Legal Services">Other Legal Drafting</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-slate-500">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>
        {state?.errors?.serviceType && <p className="text-red-500 text-xs">{state.errors.serviceType[0]}</p>}
      </div>

      <div className="space-y-2 relative">
        <label className="text-sm font-medium text-slate-700">{isUrdu ? 'تاریخ منتخب کریں' : 'Preferred Date'} *</label>
        <input type="hidden" name="date" value={date ? format(date, 'yyyy-MM-dd') : ''} />
        <Button
          type="button"
          variant="outline"
          className="w-full justify-start text-left font-normal h-12"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
        {state?.errors?.date && <p className="text-red-500 text-xs">{state.errors.date[0]}</p>}

        {showCalendar && (
          <div className="absolute top-full left-0 mt-2 z-50 bg-white border border-slate-200 shadow-xl rounded-xl">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => { setDate(d); setShowCalendar(false); }}
              disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))}
            />
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">{isUrdu ? 'تفصیلات' : 'Brief Description'}</label>
        <Textarea name="description" placeholder={isUrdu ? 'اپنی ضروریات یہاں بیان کریں...' : 'Describe your business needs...'} />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">{isUrdu ? 'دستاویزات (اختیاری)' : 'Upload Documents (Optional)'}</label>
        <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer">
          <Input name="documents" type="file" multiple className="hidden" id="file-upload" />
          <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 mb-4">
              <FileUp className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-slate-700 mb-1">{isUrdu ? 'فائلیں منتخب کریں' : 'Click to select files'}</span>
            <span className="text-xs text-slate-500">PDF, JPG, PNG (Max 5MB)</span>
          </label>
        </div>
      </div>

      <Button type="submit" disabled={isPending} className="w-full h-12 text-base shadow-lg bg-blue-900 hover:bg-blue-800">
        {isPending ? (isUrdu ? 'جمع ہو رہا ہے...' : 'Submitting...') : (isUrdu ? 'اپائنٹمنٹ بک کریں' : 'Book Appointment')}
      </Button>
    </form>
  );
}
