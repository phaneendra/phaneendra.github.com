import { MoveRight, PhoneCall } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const Hero = () => (
  <div className='container mx-auto py-8'>
    <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2'>
      <div className='flex flex-col gap-4'>
        <div>
          <Badge variant='outline'>We&apos;re live!</Badge>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='font-regular max-w-lg text-left text-5xl tracking-tighter md:text-7xl'>
            This is the start of something!
          </h1>
          <p className='max-w-md text-left text-xl leading-relaxed tracking-tight text-muted-foreground'>
            See what i am upto, I am always thinking of something new and
            interesting.
          </p>
        </div>
        <div className='flex flex-row gap-4'>
          <Button size='lg' className='gap-4' variant='outline'>
            Jump on a call <PhoneCall className='h-4 w-4' />
          </Button>
          <Button size='lg' className='gap-4'>
            Sign up here <MoveRight className='h-4 w-4' />
          </Button>
        </div>
      </div>
      <div className='aspect-square rounded-md bg-muted'></div>
    </div>
  </div>
);
