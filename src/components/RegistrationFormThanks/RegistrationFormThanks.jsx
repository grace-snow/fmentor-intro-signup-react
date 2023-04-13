import React from "react";

function RegistrationFormThanks({ children }) {
  return (
    <div
      className='bg-white text-neutral-1 rounded-lg p-6 flex flex-col gap-y-[1em] shadow-card'
      role='alert'>
      {children}
    </div>
  );
}

export default RegistrationFormThanks;
