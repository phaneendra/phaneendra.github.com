import { AuthorType } from '@/types';
import { ArrowRight, MapPin, Pencil } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

type CardProps = React.ComponentProps<typeof Card> & { author: AuthorType };

export const AuthorLocationCard = ({
  className,
  author,
  ...props
}: CardProps) => {
  return (
    <Card className={cn('mb-4 bg-muted', className)} {...props}>
      <CardHeader>
        <CardTitle>Where am I currently?</CardTitle>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='flex items-center rounded-md bg-muted pl-2 hover:bg-background/40 hover:backdrop-blur-lg'>
          <MapPin />
          <p className='ml-2 mr-auto text-sm font-medium leading-none'>
            {author.location.city}
          </p>
          <img
            src={author.location.media}
            alt='Los Angeles'
            width={56}
            height={56}
            className='h-16 w-32 rounded-md object-cover'
          />
        </div>
      </CardContent>
      <Separator />
      <CardFooter>
        <Button variant='ghost' className='w-full' disabled>
          Digital Nomad diaries <ArrowRight className='mr-2 h-4 w-4' />
        </Button>
      </CardFooter>
    </Card>
  );
};
