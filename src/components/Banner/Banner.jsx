import React from 'react';



function Banner({className, children}) {
  return <div className={`banner p-[1.0625rem] text-center rounded-lg ${className}`}>{children}</div>
}

export default Banner;