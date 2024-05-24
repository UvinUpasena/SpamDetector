from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

# Load your trained model and vectorizer
model = joblib.load('model.pkl')  # Update the path accordingly
vectorizer = joblib.load('vectorizer.pkl')  # Update the path accordingly

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    email_content = data['content']
    
    # Transform the input email content
    email_features = vectorizer.transform([email_content])
    
    # Make predictions
    prediction = model.predict(email_features)[0]
    result = 'Spam' if prediction == 1 else 'Ham'
    
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
