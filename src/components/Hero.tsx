import { type StaticImageData } from 'next/image';
import Image from 'next/image';

interface HeroProps {
  src: StaticImageData;
  alt: string;
}

export default function Hero({ src, alt }: HeroProps) {
  return (
    <section className='absolute -z-10 inset-0'>
      <Image className='object-cover' src={src} alt={alt} fill />
    </section>
  );
}
