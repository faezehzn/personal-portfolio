import {useEffect, useRef} from 'react';
import NavBar from "./NavBar"
import Banner from './Banner';
import video from "../assets/video.mp4";
import { GrFacebookOption, GrInstagram, GrLinkedinOption } from "react-icons/gr"

const Header = () => {
  const vidRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 450) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return ( 
    <section className="header">
        <div className="videobox">
          <video muted ref={vidRef} autoPlay={"autoplay"} loop>
            <source src={video} type="video/mp4" />
          </video>
          <div className="social-icon social-icon-header">
            <a href="#a"><GrInstagram className='social-i' size={35} /></a>
            <a href="#a"><GrFacebookOption className='social-i' size={35} /></a>
            <a href="#a"><GrLinkedinOption className='social-i' size={35} /></a>
          </div>
        </div>
        <div className="header-container">
          <NavBar />
          <Banner />
        </div>
      </section>
  );
}

export default Header;