import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Image src='/images/home.jpg' alt='Factory' fill />
    </main>
  );
}
