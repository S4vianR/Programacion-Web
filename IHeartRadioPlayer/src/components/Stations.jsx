import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Stations.css";

const Stations = ({ src }) => {
  const [currentSrc, setCurrentSrc] = useState(null);

  const handleIframeClick = (newSrc) => {
    if (currentSrc !== newSrc) {
      if (currentSrc) {
        document.getElementById(currentSrc).contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          '*'
        );
      }

      setCurrentSrc(newSrc);
    }
  };

  return (
    <div>
      <iframe
        id={src}
        src={src}
        className="w-full h-full border border-black rounded-2xl"
        onClick={() => handleIframeClick(src)}
      ></iframe>
    </div>
  );
};

Stations.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Stations;
