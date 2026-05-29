'use client';

import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useState } from 'react';
import SeoDescription from '@/components/SeoDescription';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24 xl:gap-40 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-[14px] font-black uppercase tracking-[0.3em] text-black block">Logistics Hub</span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black uppercase leading-[0.9]">
                Get in<br />Touch.
              </h1>
              <p className="text-black/60 text-xl font-medium tracking-tight max-w-md leading-relaxed">
                Contact our window treatment specialists for technical support or custom installation queries.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-12 pt-10">
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#f5f5f7] rounded-2xl flex items-center justify-center">
                    <Mail size={20} strokeWidth={2.5} className="text-black" />
                  </div>
                  <h3 className="text-lg font-black tracking-tight text-black uppercase">Email Us</h3>
                  <p className="text-sm font-bold text-black/30 uppercase tracking-widest leading-none">support@smartcurtains.co.ke</p>
               </div>
               
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#f5f5f7] rounded-2xl flex items-center justify-center">
                    <Phone size={20} strokeWidth={2.5} className="text-black" />
                  </div>
                  <h3 className="text-lg font-black tracking-tight text-black uppercase">Call Us</h3>
                  <p className="text-sm font-bold text-black/30 uppercase tracking-widest leading-none">+254 717 308 051</p>
               </div>
            </div>
          </div>

          <div className="bg-[#f5f5f7] p-10 md:p-16 rounded-[3.5rem] shadow-2xl shadow-black/[0.03]">
             {submitted ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in zoom-in duration-500">
                   <h2 className="text-3xl font-black tracking-tighter text-black uppercase">Sync Complete.</h2>
                   <p className="text-black/40 font-bold tracking-tight">Our agents will contact you shortly.</p>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                   <h2 className="text-3xl font-black tracking-tighter text-black uppercase mb-10">Sync with Us.</h2>
                   <div className="space-y-8">
                      <input placeholder="Full Name" required type="text" className="w-full bg-white border-none rounded-full py-5 px-8 outline-none text-sm font-bold text-black" />
                      <input placeholder="Email Address" required type="email" className="w-full bg-white border-none rounded-full py-5 px-8 outline-none text-sm font-bold text-black" />
                      <textarea placeholder="Your Message" required rows={6} className="w-full bg-white border-none rounded-[2rem] py-8 px-8 outline-none text-sm font-bold text-black resize-none"></textarea>
                      <button type="submit" className="w-full bg-black text-white text-[13px] font-black uppercase tracking-widest py-6 rounded-full">Send Message</button>
                   </div>
                </form>
             )}
          </div>
        </div>
        <SeoDescription />
      </div>
    </div>
  );
}
