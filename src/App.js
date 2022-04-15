import { useEffect, useState } from "react";
import ImageSearch from "./Components/ImageSearch";
import ImageCard from "./Components/ImageCard";
function App() {
  const [Images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=26689536-58b8d410a9f70c315db3c59f6&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && Images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto pt-32">Images Not Found</h1>
      )}
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto pt-32">Loading</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {Images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
