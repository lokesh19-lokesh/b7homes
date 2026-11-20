import React, { useEffect } from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ShopByCategorySection } from './components/sections/ShopByCategorySection';
import { CategorySection } from './components/sections/CategorySection';
import { FeaturedProducts } from './components/sections/FeaturedProducts';
import { EditorialBanner } from './components/sections/EditorialBanner';
import { BespokeSection } from './components/sections/BespokeSection';
import { CraftsmanshipStory } from './components/sections/CraftsmanshipStory';
import { SofaClinicSection } from './components/sections/SofaClinicSection';
import { HomeVisitSection } from './components/sections/HomeVisitSection';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { JournalSection } from './components/sections/JournalSection';
import { FAQSection } from './components/sections/FAQSection';
import { NewsletterSection } from './components/sections/NewsletterSection';

import { QuickViewModal } from './components/modals/QuickViewModal';
import { CartDrawer } from './components/modals/CartDrawer';
import { WishlistDrawer } from './components/modals/WishlistDrawer';
import { ArticleModal } from './components/modals/ArticleModal';
import { ToastContainer } from './components/ui/Toast';
import { BackToTop } from './components/ui/BackToTop';

const MainContent: React.FC = () => {
  const { isBookingOpen, setIsBookingOpen } = useShop();

  // Scroll to consultation form when booking is triggered
  useEffect(() => {
    if (isBookingOpen) {
      const el = document.getElementById('book-visit');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setIsBookingOpen(false);
    }
  }, [isBookingOpen, setIsBookingOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#252523] font-sans antialiased selection:bg-[#A8875B] selection:text-white overflow-x-clip w-full">
      {/* Header & Sticky Navigation */}
      <Header />

      {/* Main Homepage Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 1.1 Quick Browse Shop by Category (Reference Layout) */}
        <ShopByCategorySection />

        {/* 2. Shop By Category / Collections */}
        <CategorySection />

        {/* 3. Bestselling Furniture / Customer Favourites */}
        <FeaturedProducts />

        {/* 4. Editorial Banner / Featured Collection */}
        <EditorialBanner />

        {/* 5. Bespoke Furniture Experience & Interactive Swatch Explorer */}
        <BespokeSection />

        {/* 6. Manufacturing Story & Workshop Craftsmanship */}
        <CraftsmanshipStory />

        {/* 7. The B7 Sofa Clinic Restoration Service */}
        <SofaClinicSection />

        {/* 8. Why Choose B7 Homes Trust Pillars */}
        <WhyChooseUs />

        {/* 9. Book a Home Visit Lead-Generation Section */}
        <HomeVisitSection />

        {/* 10. Customer Testimonials Carousel */}
        <TestimonialsSection />

        {/* 11. Inspiration / Editorial Journal */}
        <JournalSection />

        {/* 12. FAQ Accordion */}
        <FAQSection />

        {/* 13. Newsletter */}
        <NewsletterSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals & Drawers */}
      <QuickViewModal />
      <CartDrawer />
      <WishlistDrawer />
      <ArticleModal />
      <ToastContainer />
      <BackToTop />
    </div>
  );
};

export function App() {
  return (
    <ShopProvider>
      <MainContent />
    </ShopProvider>
  );
}

export default App;

