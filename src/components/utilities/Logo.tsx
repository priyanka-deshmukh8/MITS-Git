
import Link from 'next/link';
import type { FC } from 'react';
import MITSgitIcon from '../icons/MITSgit';

type LogoProps = {
  normal?: boolean;
  small?: boolean;
};

const Logo: FC<LogoProps> = ({ normal = false, small = false }) => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const content = (
    <>
      <MITSgitIcon className={` ${small ? `h-6 w-6` : `h-8 w-8`}`} />
      <Link
        href="/"
        className={`font-bold tracking-tight ${small ? `text-xl` : `text-2xl`}`}
      >
        MITS Git
      </Link>
    </>
  );

  if (normal) {
    return <div className="flex items-center space-x-1">{content}</div>;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="flex items-center space-x-1 border-none py-4 text-skin-base outline-none"
    >
      {content}
    </button>
  );
};
export default Logo;
