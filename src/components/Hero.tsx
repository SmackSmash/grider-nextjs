import { PropsWithChildren } from 'react';
import { type StaticImageData } from 'next/image';
import Image from 'next/image';

type HeroProps = PropsWithChildren<{
  imgSrc: StaticImageData;
  imgAlt: string;
}>;

export default function Hero({ imgSrc, imgAlt, children }: HeroProps) {
  return (
    <section className='absolute -z-10 inset-0'>
      <Image className='object-cover' src={imgSrc} alt={imgAlt} fill />
      <h1>{children}</h1>
    </section>
  );
}
