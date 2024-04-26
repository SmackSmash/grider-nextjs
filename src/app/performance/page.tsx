import Hero from '@/components/Hero';
import PerformanceImg from '/public/images/performance.jpg';

export default function Performance() {
  return (
    <main>
      <Hero imgSrc={PerformanceImg} imgAlt='Welding'>
        <h1 className='text-4xl font-bold'>Look at this welding!</h1>
      </Hero>
    </main>
  );
}
