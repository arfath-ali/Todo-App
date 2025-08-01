export const getCroppedImg = async (imageSrc, croppedAreaPixels) => {
  if (!croppedAreaPixels) {
    throw new Error('Cropped area pixels not defined.');
  }

  const image = new Image();
  image.crossOrigin = 'anonymous';
  image.src = imageSrc;

  await new Promise((resolve, reject) => {
    image.onload = resolve;
    image.onerror = (error) => {
      console.error('Error loading image for cropping:', error);
      reject(error);
    };
  });

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = croppedAreaPixels.width;
  canvas.height = croppedAreaPixels.height;

  if (!ctx) {
    throw new Error('Could not get canvas context.');
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

  let quality = 0.95;

  const getBlob = (quality) => {
    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          resolve(blob);
        },
        'image/jpeg',
        quality,
      );
    });
  };

  let blob = await getBlob(quality);

  while (blob && blob.size > 2 * 1024 * 1024 && quality > 0.1) {
    quality -= 0.05;
    blob = await getBlob(quality);
  }

  if (!blob) {
    throw new Error('Canvas toBlob failed.');
  }

  return blob;
};
