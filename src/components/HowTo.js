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
    <div className="bg-gray-100 p-3 flex flex-col items-center mt-6">
      <h2 className="text-3xl font-bold text-center text-indigo-900 mb-4">
        How To Book a Self-Drive Car Online
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Book a car online in Jaipur from MyChoize
        in 4 Simple steps.
      </p>
      <img
        src={url}
        alt="how-to-img"
        className="lg:w-3/4 w-4/5 lg:min-h-full mb-12"
      />
    </div>
  );
}
