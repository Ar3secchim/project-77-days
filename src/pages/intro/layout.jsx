import Link from 'next/link';
import Button from '../../components/button';
import { useRouter } from 'next/router';
import ArrowLeft from '../../components/icons/arrows/arrow-left';

function LayoutRootIntro({ children }) {
  const router = useRouter();

  return (
    <section className='bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(119, 198, 181, 0.541),rgba(255,255,255,0))] absolute top-0 z-[-2] h-screen w-screen bg-white'>
      <div className='mx-6 flex h-screen flex-col pt-4'>
        <div className='flex items-center justify-between'>
          <Button onClick={() => router.back()}>
            <ArrowLeft className='stroke-primary' />
          </Button>

          <Button size='md' className='px-0 font-display text-primary'>
            <Link href='/home'>Pular</Link>
          </Button>
        </div>

        <div className='flex flex-1 flex-col items-center justify-center gap-7'>
          {children}
        </div>
      </div>
    </section>
  );
}
export default LayoutRootIntro;
