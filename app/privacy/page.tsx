'use client';
import SeoDescription from '@/components/SeoDescription';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-16">
        <div className="space-y-6">
          <span className="text-[14px] font-black uppercase tracking-[0.3em] text-black block">Data Encryption</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-[0.9]">
            Privacy <br />Protocol.
          </h1>
          <p className="text-black/60 text-xl font-medium tracking-tight leading-relaxed max-w-2xl">
            We value your privacy. All smart home data is encrypted and never shared with third parties.
          </p>
        </div>

        <div className="grid gap-12">
          {[
            { title: 'Data Collection', desc: 'Minimal data collection for order fulfillment and technical support.' },
            { title: 'Home Automation', desc: 'Your smart curtain schedules and preferences are stored locally or encrypted in the cloud.' },
            { title: 'Security', desc: 'Enterprise-grade encryption for all communications between your device and our servers.' }
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
