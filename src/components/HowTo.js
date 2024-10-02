import React, {
  useState,
  useEffect,
} from "react";

export default function HowTo() {
  const [url, setUrl] = useState(
    "/assets/Howto-img.png"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setUrl("/assets/mobile-Howto-img.png"); // URL for small screens
      } else {
        setUrl("/assets/Howto-img.png"); // URL for larger screens
      }
    };

    // Set initial image URL
    handleResize();

    // Add event listener for window resize
    window.addEventListener(
      "resize",
      handleResize
    );

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  return (
    <div className="bg-gray-100 p-3 flex flex-col items-center mt-3">
      <h1 className="text-center text-gray-700 text-2xl lg:text-4xl mb-8 mt-3 font-bold">
        How to start your ride
      </h1>
      <img
        src={url}
        alt="how-to-img"
        className="lg:w-3/4 w-4/5 lg:min-h-full"
      />
    </div>
  );
}
