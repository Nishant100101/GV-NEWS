import { useState } from "react";
import news from "./Photos/news.jpg";

function NewsContainer(props) {
  const [imgSrc, setImgSrc] = useState(props.Url || news);
  const handleImageError = () => {
    setImgSrc(news);
  };

  return (
    <div className="shadow-sm shadow-black bg-white m-3 rounded-lg p-2 relative">
      <div className="bg-red-500 max-w-xs max-h-7 overflow-hidden text-white text-lg px-2 rounded-md absolute right-3 -top-2">
        {props.author.charAt(0).toUpperCase() + props.author.slice(1)}
      </div>

      <div className=" m-3 rounded-lg p-2 sm:p-4 max-sm:w-48 max-sm:h-80 md:p-6 w-72 h-80 flex flex-col">
        {
          <img
            src={imgSrc}
            onError={handleImageError}
            alt={props.Heading}
            className="shadow-sm border border-black rounded-md shadow-black w-full h-28"
          />
        }
        <h2 className="text-2xl max-sm:text-lg max-sm:font-semibold font-bold mb-4">
          {props.Heading}...
        </h2>
        <p className="text-gray-700 ">{props.Description}...</p>
      </div>
      <a href={props.link}>
        <button className="font-semibold max-md:text-sm text-xl shadow-md shadow-black hover:bg-sky-700 active:shadow-sm rounded-md bg-sky-600 p-1 m-3 sm:-top-2 sm:relative">
          Read More
        </button>
      </a>
    </div>
  );
}

export default NewsContainer;
