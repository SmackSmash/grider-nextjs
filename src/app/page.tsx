import Hero from '@/components/Hero';
import HomeImg from '/public/images/home.jpg';

export default function Home() {
  return (
    <main>
      <Hero src={HomeImg} alt='Car factory' />
    </main>
  );
}
