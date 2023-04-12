import React from 'react';

import { siteData } from '../../data/site';

function Footer({className}) {
  return (
    <footer className={`wrapper center ${className}`}>
      <p className='attribution'>
        Challenge by{" "}
        <a href={siteData.challengeProviderUrl} target='_blank' rel="noopener" className='underline hover:text-brand-2 focus-visible:outline-brand-2 transition ease-out duration-500'>
          {siteData.challengeProvider}
        </a>
        . Coded by <a href={siteData.authorUrl} target='_blank' rel='noopener' className='underline hover:text-brand-2 focus-visible:outline-brand-2 transition ease-out duration-500'>{siteData.author}</a>.
      </p>
    </footer>
  )
}

export default Footer;