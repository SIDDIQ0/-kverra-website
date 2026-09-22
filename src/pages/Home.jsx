import { Hero } from "../components/Hero";
import { StatsBar } from "../components/StatsBar";
import { WhatWeDo } from "../components/WhatWeDo";
import { WhyKverra } from "../components/WhyKverra";
import { ServicesGrid } from "../components/ServicesGrid";
import { FeaturedTransformations } from "../components/FeaturedTransformations";
import { ProcessSteps } from "../components/ProcessSteps";
import { PortfolioGallery } from "../components/PortfolioGallery";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { CTASection } from "../components/CTASection";

export function Home({ heroReveal = true }) {
  return (
    <>
      <Hero reveal={heroReveal} />
      <StatsBar />
      <WhatWeDo />
      <WhyKverra />
      <ServicesGrid />
      <FeaturedTransformations />
      <ProcessSteps />
      <PortfolioGallery limit={6} showViewAll />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
