const sharp = require('sharp');
const fs = require('fs');

const compressHeroImage = async () => {
  try {
    await sharp('./src/public/images/heros/hero-image_4.jpg')
      .resize({ width: 1200 })
      .webp({ quality: 70 })
      .toFile('./src/public/images/heros/hero-desktop.webp');

    await sharp('./src/public/images/heros/hero-image_4.jpg')
      .resize({ width: 600 })
      .webp({ quality: 60 })
      .toFile('./src/public/images/heros/hero-mobile.webp');

  } catch (error) {
    console.error('Error compressing images:', error);
  }
};

compressHeroImage();