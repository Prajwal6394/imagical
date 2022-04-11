import { useEffect, useState } from "react";
import ImageCard from "./Components/ImageCard";
function App() {
  const[Images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[term, setTerm] = useState("");

  useEffect (() => {
    fetch(`https://pixabay.com/api/?key=26689536-58b8d410a9f70c315db3c59f6&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  },[])
  return (
   <div className="container mx-auto">
     <div className="grid grid-cols-3 gap-4">
       {Images.map(image => (
         <ImageCard key={image.id} image = {image}/>
       ))}
     </div>
   </div>
  );
}

export default App;
