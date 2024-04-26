import Hero from '@/components/Hero';
import HomeImg from '/public/images/home.jpg';

export default function Home() {
  return (
    <main>
      <Hero imgSrc={HomeImg} imgAlt='Car factory'>
        <h1 className='text-4xl font-bold'>Synthetics used as a fabric</h1>
      </Hero>
    </main>
  );
}
