import HomeHero from '@/app/(home)/_components/HomeHero';
import HomeEventPreview from '@/app/(home)/_components/HomeEventPreview';
import HomeEventSeeMore from '@/app/(home)/_components/HomeEventSeeMore';
import HomeClinicOverView from '@/app/(home)/_components/HomeClinicOverView';

export default function Page() {
  return (
    <>
      <HomeHero />
      <HomeEventPreview />
      <HomeEventSeeMore />
      <HomeClinicOverView />
    </>
  );
}
