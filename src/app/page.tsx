import { Navigation, Footer } from '@/components/layout';
import { Hero, Studio, Services, Coaches, Contact } from '@/components/sections';
import { JsonLd } from '@/components/seo/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navigation />
      <main>
        <Hero />
        <Studio />
        <Services />
        <Coaches />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
