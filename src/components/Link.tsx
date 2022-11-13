/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link';
// import bg from '@/data/assets/external-links.svg';
// import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return <Link href={href} {...rest} />;
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />;
  }

  return (
    <a
      className={`after:inline-block after:h-3 after:w-3 after:bg-[url('/static/images/external-links.svg')] after:bg-contain`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    />
  );
};

export default CustomLink;
