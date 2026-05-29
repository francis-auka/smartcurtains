'use client';
import SeoDescription from '@/components/SeoDescription';

export default function CustomerCarePage() {
  return (
    <div className="min-h-screen bg-white pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-16">
        <div className="space-y-6">
          <span className="text-[14px] font-black uppercase tracking-[0.3em] text-black block">Support Interface</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-[0.9]">
            Customer <br />Care Protocol.
          </h1>
          <p className="text-black/60 text-xl font-medium tracking-tight leading-relaxed max-w-2xl">
            Dedicated support for all your automated window covering needs.
          </p>
        </div>

        <div className="grid gap-12">
          {[
            { title: 'Expert Advice', desc: 'Consult our experts for the best curtain solutions for your home.' },
            { title: 'Troubleshooting', desc: '24/7 online guides for device setup and synchronization.' },
            { title: 'Feedback', desc: 'We value your feedback to improve our services.' }
          ].map((item, i) => (
             <div key={i} className="bg-[#f5f5f7] p-10 rounded-[2.5rem] border border-black/5 space-y-4">
                <h3 className="text-2xl font-black tracking-tight text-black uppercase">{item.title}</h3>
                <p className="text-black/40 font-bold leading-relaxed">{item.desc}</p>
             </div>
          ))}
        </div>
      </div>
      <SeoDescription />
    </div>
  );
}
