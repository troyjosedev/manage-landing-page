import FacebookIcon from '/images/icon-facebook.svg'
import YoutubeIcon from '/images/icon-youtube.svg'
import TwitterIcon from '/images/icon-twitter.svg'
import PinterestIcon from '/images/icon-pinterest.svg'
import InstagramIcon from '/images/icon-instagram.svg'
import Logo from  '/images/logo-dark-mode.svg'
import { useState } from 'react'

export default function Footer() {
    return (
        <div>
         <MobileFooter/>
         <DesktopFooter/>
        </div>
    );
}

const MobileFooter = () => {
    return (
        <div className='bg-very-dark-blue py-12 px-5 lg:hidden '>
           <InputInbox />
            <NavigationListContainer/>
            <IconMediaGallery/>
            <LogoDarkMode/>
            <CopyRight/>
        </div>
    )
}

const DesktopFooter = () => {
    return (
    <div className='bg-very-dark-blue py-16 px-24 flex justify-between items-center max-[1000px]:hidden '>
        <div className=''>
        <LogoDarkMode/>
        <IconMediaGallery/>
        </div>
        <div>
        <NavigationListContainer/>
        </div>
        <div>
        <InputInbox />
        <CopyRight/>
        </div>
    </div>
    )
}


const InputInbox = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Basic email validation regex pattern
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (email.trim() === '') {
      setError('Email cannot be empty');
    } else if (!emailPattern.test(email)) {
      setError('Invalid email address');
    } else {
      // Handle the form submission here
      setError(''); // Clear any previous error messages
      // Your code to handle a valid email address
    }
  };

  return (
    <div className="text-center">
      <form className="mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Updates in your inbox..."
          className={`text-xs py-2 px-3 mb-14 mr-2 rounded-full ${error ? 'border-bright-red' : ''}`}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(''); // Clear the error when the input changes
          }}
        />
        <button type="submit" className="text-very-light-gray bg-bright-red py-2 text-xs rounded-full px-7">
          Go
        </button>
      </form>
      {error && <div style={{ color: "#FF6969" }} className=' absolute text-xs -mt-14 ml-10  lg:-mt-14'>{error}</div>}

    </div>
  );
};




const NavigationListContainer = () => {
    return (
        <ul className="flex justify-center gap-24 mb-12 xl:gap-60">
           <div>
        <NavigationList listName="Home"/>
        <NavigationList listName="Pricing"/>
        <NavigationList listName="Products"/>
        <NavigationList listName="About Us"/>
        </div> 
        <div>
        <NavigationList listName="Career"/>
        <NavigationList listName="Community"/>
        <NavigationList listName="Privacy Policy"/>
        </div>
        </ul>
    )
}

const NavigationList = ({listName}) => {
    return (
        <>
            <li className="list-none text-[0.8125rem] font-light text-very-light-gray mb-3 hover:text-bright-red"><a href="#" >{listName}</a></li>
        </>
    )
}


const IconMediaGallery = () => {
    return (
        <div className='flex items-center justify-center gap-8 mb-12'>
            <img src={FacebookIcon} width="28" className='hover-icon'/>
            <img src={YoutubeIcon} width="28" className='hover-icon'/>
            <img src={TwitterIcon} width="28" className='hover-icon'/>
            <img src={PinterestIcon} width="28" className='hover-icon'/>
            <img src={InstagramIcon} width="28" className='hover-icon'/>
        </div>
    )
}


const LogoDarkMode = () => {
    return (
        <img src={Logo} className='mx-auto mb-14 '/>
    )
}

const CopyRight = () => <p className='text-xs text-center text-dark-grayish-blue'>Copyright 2020. All Right Reserved</p>