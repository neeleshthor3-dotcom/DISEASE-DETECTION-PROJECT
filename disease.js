import { useState } from "react";

export default function App() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  const uploadImage = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const analyze = () => {
    // simple realistic placeholder
    setResult("Possible Pneumonia (85% confidence)");
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>Disease Detection from Scan</h2>

      <input type="file" accept="image/*" onChange={uploadImage} />

      {image && (
        <div>
          <img src={image} alt="scan" style={{ width: 300, marginTop: 10 }} />
          <br />
          <button onClick={analyze} style={{ marginTop: 10 }}>Analyze</button>
        </div>
      )}

      {result && (
        <p style={{ marginTop: 10 }}><b>Result:</b> {result}</p>
      )}

      <p style={{ fontSize: 12, marginTop: 20 }}>
        
      </p>
    </div>
  );
}
