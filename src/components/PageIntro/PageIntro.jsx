import React from 'react';

function PageIntro({headingText, children, className, style}) {
  return (
    <div className={`page-intro ${className}`}>
      <h1 className='text-h1 font-bold leading-[0.91] max-w-heading mx-auto'>{headingText}</h1>
      {children}
    </div>
  )
}

export default PageIntro;