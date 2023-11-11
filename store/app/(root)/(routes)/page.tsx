import Intro from '@/app/(root)/_components/Intro';
import Hero from '@/app/(root)/_components/Hero';
import MainNavbar from '../_components/MainNavbar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <MainNavbar />
      <Hero />
      <Intro />
    </div>
  );
}
