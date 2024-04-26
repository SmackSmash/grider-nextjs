import Hero from '@/components/Hero';
import HomeImg from '/public/images/home.jpg';

export default function Home() {
  return (
    <main>
      <Hero imgSrc={HomeImg} imgAlt='Car factory'></Hero>
    </main>
  );
}
