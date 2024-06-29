from flask import Flask, request, jsonify
from ultralytics import YOLO
from PIL import Image
from flask_cors import CORS
import io

app = Flask(__name__)
CORS(app) 
model = YOLO('./runs/classify/train17/weights/last.pt')

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'})

    file = request.files['image']
    image_bytes = file.read()

    try:
        # Open image using PIL to check format and convert to supported format
        image = Image.open(io.BytesIO(image_bytes))

        # Convert image to RGB format (if not already in RGB)
        if image.mode != 'RGB':
            image = image.convert('RGB')

        # Process the image with the Ultralytics model
        results = model(image)

        # Extract prediction results and return
        names_dict = results[0].names
        probs = results[0].probs.data.tolist()
        predicted_class = names_dict[probs.index(max(probs))]

        return jsonify({'predicted_class': predicted_class})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
