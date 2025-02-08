import React, { useEffect, useState } from "react";

const ProgressLine = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // How much user scrolled
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
      const scrollPercentage = (scrollTop / docHeight) * 100;
      setProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ height: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressLine;
