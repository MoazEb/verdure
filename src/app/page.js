'use client'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CustomerFeedback from '@/components/CustomerFeedback';
import OurProducts from '@/components/OurProducts';
import Benefits from '@/components/Benefits';

export default function Home() {
  return (

    <main>
      <Header />
      <Hero />
      <OurProducts />
      <Benefits />
      <CustomerFeedback />
      <Footer />
    </main>

  );
}