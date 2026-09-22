import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { UtilityBar } from "./components/UtilityBar";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { LoadingScreen } from "./components/LoadingScreen";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { ServiceDetail } from "./pages/ServiceDetail";
import { Portfolio } from "./pages/Portfolio";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Terms } from "./pages/Terms";
import { NotFound } from "./pages/NotFound";
import { useLenis } from "./lenis/LenisContext.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  const lenisRef = useLenis();
  useEffect(() => {
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, lenisRef]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [heroReveal, setHeroReveal] = useState(false);

  return (
    <>
      {loading && (
        <LoadingScreen onFinish={() => setLoading(false)} onReveal={() => setHeroReveal(true)} />
      )}
      <div className="grain-overlay" aria-hidden="true" />
      <ScrollToTop />
      <UtilityBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home heroReveal={heroReveal} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
