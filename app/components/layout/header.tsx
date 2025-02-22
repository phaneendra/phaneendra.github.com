import { useState } from 'react';
import { Link, useRouter } from '@tanstack/react-router';
import { siteMetadata } from '@/config/site-metadata';
import { Menu, MoveRight, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '~/components/ui/navigation-menu';
import { useScroll } from '@/lib/hooks/use-scroll';
import { Button } from '@/components/ui/button';
import { ThemeSwitch } from '@/components/widgets/theme-switch';

export const Header = () => {
  const navigationItems = siteMetadata.navigationItems;

  const scrolled = useScroll(50);
  const [isOpen, setOpen] = useState(false);

  const router = useRouter();
  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scrolled ? 'border-b' : 'bg-transparent'
      }`}
    >
      <div className='container relative mx-auto flex min-h-20 flex-row items-center gap-4 lg:grid lg:grid-cols-3'>
        <div className='hidden flex-row items-center justify-start gap-4 lg:flex'>
          <NavigationMenu className='flex items-start justify-start'>
            <NavigationMenuList className='flex flex-row justify-start gap-4'>
              {navigationItems?.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.url ? (
                    <>
                      <NavigationMenuLink>
                        <Button variant='ghost'>{item.title}</Button>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className='text-sm font-medium'>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className='!w-[450px] p-4'>
                        <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
                          <div className='flex h-full flex-col justify-between'>
                            <div className='flex flex-col'>
                              <p className='text-base'>{item.title}</p>
                              <p className='text-sm text-muted-foreground'>
                                {item.description}
                              </p>
                            </div>
                            <Button size='sm' className='mt-10'>
                              Book a call today
                            </Button>
                          </div>
                          <div className='flex h-full flex-col justify-end text-sm'>
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.url}
                                key={subItem.title}
                                className='flex flex-row items-center justify-between rounded px-4 py-2 hover:bg-muted'
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className='h-4 w-4 text-muted-foreground' />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className='flex lg:justify-center'>
          <p className='font-semibold'>Urban Challengers</p>
        </div>
        <div className='flex w-full justify-end gap-4'>
          <ThemeSwitch />
        </div>
        <div className='flex w-12 shrink items-end justify-end lg:hidden'>
          <Button variant='ghost' onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </Button>
          {isOpen && (
            <div className='container absolute right-0 top-20 flex w-full flex-col gap-8 border-t bg-background py-4 shadow-lg'>
              {navigationItems?.map((item) => (
                <div key={item.title}>
                  <div className='flex flex-col gap-2'>
                    {item.url ? (
                      <Link
                        to={item.url}
                        className='flex items-center justify-between'
                        onClick={() => setOpen(false)}
                      >
                        <span className='text-lg'>{item.title}</span>
                        <MoveRight className='h-4 w-4 stroke-1 text-muted-foreground' />
                      </Link>
                    ) : (
                      <p className='text-lg'>{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.url}
                          className='flex items-center justify-between'
                          onClick={() => setOpen(false)}
                        >
                          <span className='text-muted-foreground'>
                            {subItem.title}
                          </span>
                          <MoveRight className='h-4 w-4 stroke-1' />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
