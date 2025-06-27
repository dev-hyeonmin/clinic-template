import HomeHero from '@/app/(home)/_components/HomeHero';
import HomeEventPreview from '@/app/(home)/_components/HomeEventPreview';
import HomeEventSeeMore from '@/app/(home)/_components/HomeEventSeeMore';

export default function Page() {
  return (
    <>
      <HomeHero />
      <HomeEventPreview />
      <HomeEventSeeMore />
    </>
  );
}
