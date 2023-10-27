import React, { useState, useEffect } from 'react';
import LogoImg from '/images/logo.svg';
import { Sling as Hamburger } from 'hamburger-react';

export default function Navigation() {
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    // Update the isMobile state when the window is resized
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex items-center justify-between pt-10 px-6 mb-12 relative  lg:mb-16 lg:justify-around lg:pt-16">
      <Logo />
      {/* Show the Hamburger menu only on mobile devices (width < 1024px) */}
      {isMobile && (
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="hsl(228, 39%, 23%)"
          distance="sm"
          size={20}
          label="Show menu"
          duration={0.8}
        />
      )}
      {isOpen && isMobile && <NavigationListMobile />}
      <NavigationListDesktop/>
      <button
      className='text-very-light-gray bg-bright-red text-xs font-medium rounded-full py-3 px-6 shadow-lg shadow-${bgColor} drop-shadow-2-xl z-10 max-[1000px]:hidden  hover:opacity-50'
    >
      Get Started
    </button>
    
    </div>
  );
}

const Logo = () => {
    return (
  <img src={LogoImg} className="max-w-[6.875em]" alt="Manage landing page logo" />
    )
};

const NavigationListMobile = () => {
  return (
    <ul className='absolute bg-very-light-gray text-dark-blue font-medium text-sm top-32 left-6 px-[9em] py-11 flex flex-col items-center gap-6 rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_50px_300px] md:left-[8em] md:px-60 '>
      <li>
        <a href="#pricing">Pricing</a>
      </li>
      <li>
        <a href="#product">Product</a>
      </li>
      <li>
        <a href="#about-us">About Us</a>
      </li>
      <li>
        <a href="#careers">Careers</a>
      </li>
      <li>
        <a href="#community">Community</a>
      </li>
    </ul>
  );
};

const NavigationListDesktop= () => {
    return (
      <ul className=' text-dark-blue font-medium text-xs lg:flex gap-8 max-[1000px]:hidden'>
        <li>
          <a href="#pricing" className='hover:opacity-50'>Pricing</a>
        </li>
        <li>
          <a href="#product" className='hover:opacity-50'>Product</a>
        </li>
        <li>
          <a href="#about-us" className='hover:opacity-50'>About Us</a>
        </li>
        <li>
          <a href="#careers" className='hover:opacity-50'>Careers</a>
        </li>
        <li>
          <a href="#community" className='hover:opacity-50'>Community</a>
        </li>
      </ul>
    );
  };
  
