'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import { createClient } from '@/utils/supabase/client';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory?: string;
  description: string;
  features: string[];
  inStock: boolean;
}

function HomeContent() {
  const supabase = createClient();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      setError(null);
      try {
        const { data, error: fetchError } = await supabase
          .from('products')
          .select('*')
          .eq('category', 'curtains') // Filtering for curtains
          .order('createdat', { ascending: false });

        if (fetchError) throw fetchError;

        if (data) {
          const mappedProducts: Product[] = data.map((item: any) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.imageurl || item.imageUrl || item.image_url || item.image || 'https://images.unsplash.com/photo-1549416864-da0a6b63d91c?w=500&h=500&fit=crop',
            category: item.category,
            subcategory: item.subcategory,
            description: item.description,
            features: item.features || [],
            inStock: item.instock ?? item.inStock ?? item.in_stock ?? true
          }));

          setProducts(mappedProducts);
        }
      } catch (err: any) {
        console.error('Error fetching products:', err.message);
        setError(`Database Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, [supabase]);

  const featuredProducts = useMemo(() => products.slice(0, 4), [products]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            className="w-full h-full object-cover brightness-[0.7]"
          >
            <source
              src="https://res.cloudinary.com/di5ga8z9i/video/upload/q_auto,f_auto/v1780036417/6781559-uhd_3840_2160_30fps_p22zkj.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
          <div className="max-w-2xl space-y-10 text-left">
            <span className="text-[14px] uppercase tracking-[0.4em] font-black text-white/90 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full inline-block">Automation Series v1.0</span>
            <h1 className="text-white text-7xl md:text-9xl font-black tracking-tight leading-[0.8] uppercase">
              Smart <br />Privacy.
            </h1>
            <p className="text-white/80 text-xl font-medium tracking-tight max-w-md leading-relaxed">
              Experience the future of window treatments. Premium motorized curtains designed for the modern home.
            </p>
            <div className="pt-6">
              <Link href="/shop" className="bg-white text-black px-16 py-6 rounded-full font-black text-[13px] uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl flex items-center gap-4 w-fit">
                Shop Collection
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Grid */}
      <section id="shop" className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-10">
            <div className="space-y-4">
              <h2 className="text-black text-4xl md:text-5xl font-black tracking-tighter uppercase">Signature Drapes.</h2>
              <p className="text-black/40 font-bold tracking-tight text-lg">Curated fabric and motor technology for your space.</p>
            </div>

            <Link
              href="/shop"
              className="text-[12px] font-black uppercase tracking-widest text-black flex items-center gap-4 group hover:opacity-70 transition border-2 border-black/5 px-10 py-4 rounded-full"
            >
              View All Products
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="w-full">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-40 gap-8">
                <div className="w-12 h-12 border-4 border-black/5 border-t-black rounded-full animate-spin" />
                <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-black/20">Loading Showroom</p>
              </div>
            ) : error ? (
              <div className="py-40 text-center text-red-500 font-bold tracking-tight">
                {error}
              </div>
            ) : products.length === 0 ? (
              <div className="py-40 text-center text-black/20 font-bold uppercase tracking-widest">
                No products found
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mobile-slider no-scrollbar">
                {featuredProducts.map(p => (
                  <div key={p.id} className="w-[85vw] md:w-auto">
                    <ProductCard product={p} />
                  </div>
                ))}
              </div>
            )}

            <div className="mt-16 md:hidden">
              <Link href="/shop" className="block w-full text-center bg-black text-white py-5 rounded-full font-black text-[13px] uppercase tracking-widest">
                Shop All Collections
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Hero Promo */}
      <section className="pb-40 px-6">
        <div className="max-w-7xl mx-auto rounded-[3.5rem] overflow-hidden min-h-[700px] flex items-center relative group shadow-2xl">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600&h=900&fit=crop"
              alt="Promo Background"
              fill
              className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
          </div>

          <div className="grid md:grid-cols-2 gap-20 items-center px-10 md:px-24 relative z-10 w-full pt-20 md:pt-0">
            <div className="space-y-10">
              <span className="bg-white/95 backdrop-blur-md px-6 py-2 rounded-full text-[12px] font-black uppercase tracking-[0.3em] text-black inline-block shadow-xl">Architectural Series</span>
              <h2 className="text-white text-5xl md:text-8xl font-black tracking-tight leading-[0.9] uppercase">
                Silent <br />Motion.
              </h2>
              <p className="text-white/80 text-xl font-medium tracking-tight max-w-sm leading-relaxed">
                Ultra-quiet motors paired with premium acoustic fabrics. Elevate your sanctuary.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/shop" className="bg-white text-black px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl text-center">
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 md:py-40 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { title: 'Silent Drive', desc: 'Whisper-quiet motor technology.', icon: '🤫' },
            { title: 'Voice Control', desc: 'Integration with Alexa & Google Home.', icon: '🎙️' },
            { title: 'Custom Fabric', desc: 'Premium materials for every room.', icon: '🧵' },
            { title: 'Remote App', desc: 'Control your windows from anywhere.', icon: '📱' }
          ].map((f, i) => (
            <div key={i} className="bg-white p-12 rounded-[2.5rem] space-y-6 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-black/5 group">
              <div className="text-5xl mb-8 group-hover:scale-125 transition-transform block">{f.icon}</div>
              <h3 className="text-xl font-black tracking-tight text-black uppercase">{f.title}</h3>
              <p className="text-black/40 font-bold text-sm leading-relaxed tracking-tight">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="h-screen bg-white flex flex-col items-center justify-center gap-6">
      <div className="w-12 h-12 border-4 border-black/5 border-t-black rounded-full animate-spin" />
      <p className="text-[11px] font-black tracking-[0.5em] text-black/20 uppercase">Loading Showroom</p>
    </div>}>
      <HomeContent />
    </Suspense>
  );
}
