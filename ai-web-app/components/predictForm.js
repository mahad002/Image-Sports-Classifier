// components/PredictForm.js
import { useState } from 'react';
import axios from 'axios';

export default function PredictForm() {
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
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

  return (
    <div className="container">
      <h1 className="heading">Object Detection</h1>
      <input type="file" onChange={handleFileChange} />
      {prediction && <p className="result">Predicted Class: {prediction}</p>}
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .heading {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #333;
        }
        .result {
          font-size: 18px;
          color: #0066ff;
        }
        input[type="file"] {
          margin-top: 20px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
