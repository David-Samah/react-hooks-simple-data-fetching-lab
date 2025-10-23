import React, { useState, useEffect } from "react";

function App() {
  // State variables
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch random dog image when component mounts
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setIsLoading(false);
      });
  }, []);

  // Conditional rendering
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🐶 Random Dog Viewer</h1>
      <img
        src={imageUrl}
        alt="A Random Dog"
        style={{ maxWidth: "400px", borderRadius: "8px" }}
      />
    </div>
  );
}

export default App;

