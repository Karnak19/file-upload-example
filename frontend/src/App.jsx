import { useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", file);

    setLoading(true);
    await axios.post("http://localhost:5000/api/v1/upload", formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    setLoading(false);
  };

  const handleFile = (e) => setFile(e.target.files[0]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {loading && <h1>Loading...</h1>}
        <form onSubmit={handleSubmit}>
          <input type="file" name="files" id="files" onChange={handleFile} />
          <button type="submit">Send</button>
        </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
