'use client'
import Hero from '@/components/Hero';
import CustomerFeedback from '@/components/CustomerFeedback';
import OurProducts from '@/components/OurProducts';
import Benefits from '@/components/Benefits';

export default function Home() {
  return (

    <main>
      <Hero />
      <OurProducts />
      <Benefits />
      <CustomerFeedback />
    </main>

  );
}