import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
  'image7.jpg',
  'image8.jpg',
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  const imageName = images[randomIndex];
  return `/pictures_landingPage/${imageName}`;
};

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: (props) => `url(${props.currentImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(getRandomImage());
  const classes = useStyles({ currentImage });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newImage = getRandomImage();
      setCurrentImage(newImage);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div >
    
    </div>
  );
};

export default ImageSlider;