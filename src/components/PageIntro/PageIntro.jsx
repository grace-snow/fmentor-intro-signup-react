import React from 'react';

function PageIntro({children, className}) {
  return (
    <div className={`page-intro ${className}`}>
      {children}
    </div>
  )
}

export default PageIntro;