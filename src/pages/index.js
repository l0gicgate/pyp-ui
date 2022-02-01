import { NextSeo } from 'next-seo';
import { LandingPage } from '../components/scenes/LandingPage';

export default function Index() {
  return (
    <>
      <NextSeo title="Pressure Your Politicians" />
      <LandingPage />
    </>
  );
}
