import { Navigation, Footer } from '@/components/layout';
import { Hero, Studio, Services, Coaches, FAQ, Contact } from '@/components/sections';
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
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
