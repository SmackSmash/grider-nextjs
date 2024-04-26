import Hero from '@/components/Hero';
import ReliabilityImg from '/public/images/reliability.jpg';

export default function Reliability() {
  return (
    <main>
      <Hero imgSrc={ReliabilityImg} imgAlt='Look at us welding!'>
        <h1 className='text-4xl font-bold'>This is some crazy stuff</h1>
      </Hero>
    </main>
  );
}
