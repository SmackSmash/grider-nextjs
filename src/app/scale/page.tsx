import Hero from '@/components/Hero';
import ScaleImg from '/public/images/scale.jpg';

export default function Scale() {
  return (
    <main>
      <Hero imgSrc={ScaleImg} imgAlt='Factory'>
        <h1 className='text-4xl font-bold'>
          It looks like it would be hot in here
        </h1>
      </Hero>
    </main>
  );
}
