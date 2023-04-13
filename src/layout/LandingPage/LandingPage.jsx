import React from "react";

import PageIntro from "../../components/PageIntro/PageIntro";
import PageIntroHeading from '../../components/PageIntroHeading/PageIntroHeading';
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import RegistrationFormThanks from '../../components/RegistrationFormThanks/RegistrationFormThanks';

function LandingPage() {
  const [isRegistered, setIsRegistered] = React.useState(false);

  const [values, setValues] = React.useState({
    givenName: "",
    familyName: "",
    email: "",
    password: "",
  });

  const onSubmit = (data) => {
    setValues(data);
    setIsRegistered(true);
  };

  // console.log(values);

  return (
    <div
      className='flex flex-col font-sans bg-center bg-no-repeat bg-cover min-h-inherit bg-landing sm:bg-landing-desktop bg-brand-1'
      role='presentation'>
      <main tabIndex='-1' className='[bg-landing] grow flex items-center'>
        <div className='grid items-center p-6 py-10 mx-auto md:grid-cols-2 gap-x-12 gap-y-16'>
          <PageIntro
            className={"text-white bg-opaque-dark text-center md:text-left rounded-md p-6"}>
            <PageIntroHeading>
              Learn to code by watching others
            </PageIntroHeading>
            <p className='max-w-md mt-8 font-medium'>
              See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
            </p>
          </PageIntro>
          <div className='grid gap-6'>
            <Banner className='font-normal text-white bg-brand-accent shadow-card'>
              <p>
                <strong className='font-bold'>Try free for 7 days</strong> then $20/mo. thereafter
              </p>
            </Banner>
            {isRegistered ? (
              <RegistrationFormThanks>
                <p className='text-md'>Thanks for signing up!</p>
              </RegistrationFormThanks>
            ) : (
              <RegistrationForm onSubmit={onSubmit} />
            )}
          </div>
        </div>
      </main>
      <Footer className={"text-white bg-opaque-dark text-center p-2"} />
    </div>
  );
}

export default LandingPage;
