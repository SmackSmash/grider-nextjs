import { type PropsWithChildren } from 'react';
import { type StaticImageData } from 'next/image';
import Image from 'next/image';

type HeroProps = PropsWithChildren<{
  imgSrc: StaticImageData;
  imgAlt: string;
}>;

export default function Hero({ imgSrc, imgAlt, children }: HeroProps) {
  return (
    <section className='absolute -z-10 inset-0 flex items-center justify-center'>
      <Image className='object-cover' src={imgSrc} alt={imgAlt} fill />
      <div className='-z-0'>{children}</div>
    </section>
  );
}
