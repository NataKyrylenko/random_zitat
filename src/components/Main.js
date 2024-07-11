// components/Content.js
import { useState, useEffect } from "react";

const Main = () => {
  const [quote, setQuote] = useState("");
  const [image, setImage] = useState("");

  const fetchQuote = async () => {
    const response = await fetch(
      "https://api.chucknorris.io/jokes/random?category=dev"
    );
    const data = await response.json();
    setQuote(data.value);
    setImage(data.icon_url);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="flex flex-col items-center p-4 gap-3 justify-around md:flex-row">
      {image && (
        <div className="flex items-center justify-center w-6/12">
          <img src={image} alt="Chuck Norris" className="w-6/12" />
        </div>
      )}
      <div className="flex flex-col items-center justify-center w-6/12">
        <p className="text-lg mb-4">{quote}</p>
        <button
          onClick={fetchQuote}
          className="bg-cyan-600 hover:bg-cyan-800 transition transform hover:-translate-y-1 text-white py-2 px-4 rounded">
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Main;
