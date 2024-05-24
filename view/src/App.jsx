import { useState } from 'react'
import axios from "axios";

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [result, setResult] = useState('');
 
  
  const handleSubmit = async (event) => {
    event.preventDefault();  // prevent refreshing the page

    try{
      const response = await axios.post('http://localhost:5000/predict', {
       headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: emailContent }),
      });
      const data = await response.json();
      setResult(data.result);
    }
    
    catch(error){
      console.log(error);
    }


  };

  const clearContent = () => {
      setEmailContent('');
  }

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
        <button onClick={clearContent}>Clear</button>
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