import React, { useCallback, useRef } from 'react';
import scrollTo from 'scroll-to';
import { Hero } from './Hero';
import { Politicians } from './Politicians';

export const LandingPage = () => {
  const selectYourProvinceRef = useRef();

  const handleClickHero = useCallback(() => {
    const scrollTop = selectYourProvinceRef.current.getBoundingClientRect().top;
    scrollTo(0, scrollTop, {
      ease: 'out-expo',
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Hero onClick={handleClickHero} />
      <Politicians ref={selectYourProvinceRef} />
    </>
  );
};
