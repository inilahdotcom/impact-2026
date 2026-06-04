import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Shift } from "@/components/sections/shift";
import { Values } from "@/components/sections/values";
import { Stats } from "@/components/sections/stats";
import { Speakers } from "@/components/sections/speakers";
import { Agenda } from "@/components/sections/agenda";
import { Activations } from "@/components/sections/activations";
import { Sponsorship } from "@/components/sections/sponsorship";
import { Register } from "@/components/sections/register";
import { JsonLd } from "@/components/seo/json-ld";

export default function Page() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Shift />
        <Values />
        <Stats />
        <Speakers />
        <Agenda />
        <Activations />
        <Sponsorship />
        <Register />
      </main>
      <Footer />
    </>
  );
}
