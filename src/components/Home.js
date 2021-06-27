import React from 'react';
import homepagephoto from '../assets/images/homepagephoto.jpg';

const Home = () => {
  return (
    <div className='home'>
      <h1 >Toddler Grub</h1>
      <h3 >A recipe logger for busy parents</h3>
      <img className="photo" src={homepagephoto} />
    </div>
  );
};

export default Home;
