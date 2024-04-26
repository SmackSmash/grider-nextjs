import { PropsWithChildren } from 'react';
import { type StaticImageData } from 'next/image';
import Image from 'next/image';

type HeroProps = PropsWithChildren<{
  imgSrc: StaticImageData;
  imgAlt: string;
}>;

export default function Hero({ imgSrc, imgAlt, children }: HeroProps) {
  return (
    <section className='absolute inset-0 flex items-center justify-center'>
      <Image className='object-cover -z-10' src={imgSrc} alt={imgAlt} fill />
      {children}
    </section>
  );
}
