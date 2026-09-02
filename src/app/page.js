import HeroSection from "@/component/HeroSection";
import ProductGridSection from "@/component/HomeProduct";
import PosterScrollSection from "@/component/PosterScroolSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PosterScrollSection />
      <ProductGridSection/>
    </div>
  );
}
