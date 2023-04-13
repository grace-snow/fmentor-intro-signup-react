import React from "react";

function RegistrationFormThanks({ children }) {
  return (
    <div
      className='bg-white text-neutral-1 rounded-md p-6 flex flex-col gap-y-[20px] shadow-card'
      role='alert'>
      {children}
    </div>
  );
}

export default RegistrationFormThanks;