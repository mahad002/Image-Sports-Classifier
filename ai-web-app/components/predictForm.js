import { useState } from 'react';
import axios from 'axios';

export default function PredictForm() {
  const [prediction, setPrediction] = useState(null);
  const [image, setImage] = useState(null); // added this line

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));

    const formData = new FormData();      // added this line
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Prediction:', response.data);

      setPrediction(response.data.predicted_class);
    } catch (error) {
      console.error('Error predicting:', error);
    }
  };

  const removeUpload = () => {
    setImage(null);
  };

  return (
    <div className="predictForm-container">
      <h1 className="predictForm-heading">Object Detection</h1>
      <div className="file-upload">
        <button className="file-upload-btn" type="button" onClick={() => document.querySelector('.file-upload-input').click()}>Add Image</button>
        <div className="image-upload-wrap">
          <input className="file-upload-input" type='file' onChange={handleFileChange} accept="image/*" />
          <div className="drag-text">
            <h3>Drag and drop a file or select add Image</h3>
          </div>
        </div>
        {image &&
          <div className="file-upload-content">
            {image && <img className="file-upload-image" src={image} alt="Uploaded" />}
            <div className="image-title-wrap">
              <button type="button" onClick={removeUpload} className="remove-image">Remove <span className="image-title">Uploaded Image</span></button>
            </div>
          </div>
        }
      </div>
      {prediction && <p className="result">Predicted Class: {prediction}</p>}
    </div>
  );
}