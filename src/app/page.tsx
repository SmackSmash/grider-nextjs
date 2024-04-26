import Image from 'next/image';

export default function Home() {
  return (
    <main className='absolute -z-10 inset-0'>
      <Image
        className='object-cover'
        src='/images/home.jpg'
        alt='Factory'
        fill
      />
    </main>
  );
}
