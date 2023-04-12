import React from 'react';

import PageIntro from '../../components/PageIntro/PageIntro';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/Footer.js/footer';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { set } from 'react-hook-form';

function LandingPage() {
  const [isRegistered, setIsRegistered] = React.useState(false);

  const [values, setValues] = React.useState({
    givenName: '',
    familyName: '',
    email: '',
    password: '',
  })

  const onSubmit = (data) => {
    setValues(data);
    setIsRegistered(true);
  };

  console.log(values)

  return (
    <div className='flex flex-col font-sans min-h-inherit bg-landing sm:bg-landing-desktop bg-no-repeat bg-brand-1 bg-center bg-cover' role="presentation">
      <main tabIndex="-1" className='[bg-landing] grow flex items-center'>
        <div className='wrapper grid md:grid-cols-2 gap-x-12 gap-y-16 items-center mx-auto p-6'>
          <PageIntro className={'text-white bg-opaque-dark text-center md:text-left rounded-md p-6'} headingText={'Learn to code by watching others'}>
            <p className='mt-8 max-w-md'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
          </PageIntro>
          <div className='grid gap-4'>
            <Banner className="bg-brand-accent text-white">
              <strong className='font-bold'>Try free for 7 days</strong>  then $20/mo. thereafter
            </Banner>
            {isRegistered ? (
              <div className='bg-white text-neutral-1 rounded-md p-6 flex flex-col gap-y-[20px]'>
                <p className='text-md'>Thanks for signing up!</p>
              </div>
            ) : (
              <RegistrationForm onSubmit={onSubmit} />
            )}
          </div>
        </div>
      </main>
      <Footer className={'text-white bg-opaque-dark text-center p-2'}  />
    </div>
  )
}

export default LandingPage;