import { useState } from 'react'


function App() {
  const [emailContent, setEmailContent] = useState('');
  const [result, setResult] = useState('');
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: emailContent }),
    });
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Spam Detector</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            rows="10"
            cols="50"
            placeholder="Enter email content here..."
          />
        </div>
        <button type="submit">Check Email</button>
      </form>
      {result && (
        <div>
          <h2>Result: {result}</h2>
        </div>
      )}
    </div>
  );
}

export default App;