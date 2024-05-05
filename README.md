---

# Sports Image Classification

This project involves building a sports image classifier using a dataset from [Kaggle](https://www.kaggle.com/datasets/sidharkal/sports-image-classification). The classifier is implemented in a Jupyter Notebook named `Sport_Classifier.ipynb`. Additionally, there is a frontend application built with Next.js located in the `ai-web-app` directory.

## Installation

### Backend (Jupyter Notebook)

1. Clone this repository:

   ```bash
   git clone https://github.com/your_username/sports-image-classification.git
   ```

2. Navigate to the project directory:

   ```bash
   cd sports-image-classification
   ```

3. Open and run the Jupyter Notebook:

   ```bash
   jupyter notebook Sport_Classifier.ipynb
   ```

4. Follow the instructions in the notebook to train and evaluate the classifier.

### Frontend (Next.js)

1. Navigate to the `ai-web-app` directory:

   ```bash
   cd ai-web-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Next.js project:

   ```bash
   npm run dev
   ```

   This will start the frontend application at `http://localhost:3000`.

## Usage

- **Jupyter Notebook**: Follow the instructions in `Sport_Classifier.ipynb` to train and evaluate the sports image classifier.
- **Frontend Application**: Access the application by navigating to `http://localhost:3000` in your web browser after starting the Next.js project.

## Customization

If you want to customize the backend or frontend URLs:

- Backend URL: Modify the backend URL in the frontend code located in `ai-web-app/components/predictForm.js`.
- Frontend URL: Modify the port in the backend URL in the Jupyter Notebook if you're hosting the frontend on a different port.

## Contributing

If you want to contribute to this project, please follow these steps:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/my-feature`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
