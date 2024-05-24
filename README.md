Spam Detector

This project consists of a web application built with React for the frontend and Flask for the backend. It implements a spam email detection system using machine learning.
Machine Learning Model

The spam email detection model used in this project is trained using logistic regression on a dataset of email messages labeled as spam or ham (non-spam). Here's how the model was trained:

Data Preparation: The dataset used for training consists of email messages labeled as spam or ham. It was preprocessed to convert text data into numerical feature vectors using TF-IDF vectorization.
Model Training: The preprocessed data was split into training and testing sets using the train_test_split function from scikit-learn. The logistic regression model was then trained on the training set.
Model Evaluation: The trained model was evaluated on both the training and testing sets to assess its accuracy.
Model Saving: After training, the model was saved using the joblib library for later use in the Flask backend.

Training Code

The training code used to train the machine learning model can be found in the train_model.ipynb notebook. It includes the following steps:

Loading the dataset
Data preprocessing
Splitting the data into training and testing sets
Training the logistic regression model
Evaluating the model's performance

Getting Started

Prerequisites

Node.js and npm installed on your system for running the frontend React application.
Python installed on your system for running the Flask backend.
Ensure you have the necessary Python libraries installed. You can install them using pip:

    pip install flask flask-cors scikit-learn joblib

Installation

    git clone https://github.com/UvinUpasena/SpamDetector.git

Navigate to the project directory:

    cd SpamDetector

Install frontend dependencies:
   
    npm install
    npm i axios

Usage

Start the Flask backend:

    python app.py

Start the React frontend:

    npm start

Access the web application in your browser at http://localhost:3000.

Features

Spam Detection: Enter email content into the provided textarea, and the system will classify it as either spam or ham (non-spam).
Clear Functionality: Click the "Clear" button to clear the textarea.

Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.
