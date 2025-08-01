export const getCroppedImg = (imageSrc, croppedAreaPixels) => {
  return new Promise((resolve, reject) => {
    if (!croppedAreaPixels) {
      reject(new Error('Cropped area pixels not defined.'));
      return;
    }

    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = imageSrc;

    image.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      canvas.width = croppedAreaPixels.width;
      canvas.height = croppedAreaPixels.height;

      if (!ctx) {
        reject(new Error('Could not get canvas context.'));
        return;
      }

      ctx.drawImage(
        image,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
      );

      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Canvas toBlob failed.'));
          }
        },
        'image/jpeg',
        0.95,
      );
    };

    image.onerror = (error) => {
      console.error('Error loading image for cropping:', error);
      reject(error);
    };
  });
};
