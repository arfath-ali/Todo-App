import { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '/src/utils/cropImage';
import { ClipLoader } from 'react-spinners';

const ImageCropModal = ({ src, onCropDone, onCancel }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isCropping, setIsCropping] = useState(false);

  const onCropComplete = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleCrop = async () => {
    setIsCropping(true);
    try {
      const blob = await getCroppedImg(src, croppedAreaPixels);
      onCropDone(blob);
    } catch (error) {
      console.error('Error cropping image:', error);
    } finally {
      setIsCropping(false);
      onCancel();
    }
  };

  return (
    <div className="image-crop-modal app-text-medium mx-auto max-w-[400px] rounded-[5px] bg-white px-4 py-5 shadow-lg dark:bg-gray-800">
      <div className="relative h-64 overflow-hidden rounded-lg dark:bg-black bg-white">
        <Cropper
          image={src}
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          classes={{ containerBase: 'react-easy-crop' }}
        />
      </div>

      <div className="mt-8 flex items-center justify-between gap-6 text-black">
        <button
          className="cancel-button-gradient flex-grow cursor-pointer rounded-[5px] p-3"
          onClick={onCancel}>
          Cancel
        </button>
        <button
          className="save-button-gradient flex-grow cursor-pointer rounded-[5px] p-3 disabled:opacity-50"
          onClick={handleCrop}
          disabled={isCropping || !croppedAreaPixels}>
          {isCropping ? <ClipLoader color="#fff" size={16} /> : 'Save'}
        </button>
      </div>
      <p className="app-text-small mt-4 text-center  dark:text-gray-400 italic">
        Adjust the zoom and position to crop your image.
      </p>
    </div>
  );
};

export default ImageCropModal;
