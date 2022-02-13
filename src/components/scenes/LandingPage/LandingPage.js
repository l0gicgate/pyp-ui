import React, { useCallback, useRef } from 'react';
import scrollTo from 'scroll-to';
import { Hero } from './Hero';
import { Politicians } from './Politicians';
import { WEFWallOfShame } from './WEFWallOfShame';

export const LandingPage = () => {
  const selectYourProvinceRef = useRef();

  const handleClickHero = useCallback(() => {
    const scrollTop = selectYourProvinceRef.current.getBoundingClientRect().top;
    scrollTo(0, scrollTop, {
      duration: 1000,
      ease: 'out-expo',
    });
  }, []);

  return (
    <>
      <Hero onClick={handleClickHero} />
      <Politicians ref={selectYourProvinceRef} />
      <WEFWallOfShame />
    </>
  );
};
