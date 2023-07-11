import TypoComp from '@utilities/TypoComponent';
import type { FC } from 'react';

const Slogun: FC = () => {
  const year = new Date().getFullYear();
  return (
    <div className="">
      <TypoComp className="prose-headings:my-0 prose-h1:italic prose-p:my-2 prose-p:text-skin-muted/80">
        <h2>Open source:</h2>
        <h1>Where ideas meet innovation.</h1>
        <p>© {year} Priyanka Deshmukh . All rights reserved </p>
      </TypoComp>
    </div>
  );
};

export default Slogun;
