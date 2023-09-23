import React from 'react';
import homeIcon from '../../assets/video-call.png';
import './Navbar.css';
import StarIcon from '@material-ui/icons/Star';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='title-div'>
        <h3>AICTE VIDEO CALL</h3>
      </div>
      <a className='repo' href="https://github.com/Nishu0" target='_blank'>
        <StarIcon className='rotate' />
        <div className='repo-text'>
          <p className='github-name'>Github</p>
          <p className='repo-name'>Give repo a star</p>
        </div>
      </a>
    </div>
  );
};

export default Navbar;
