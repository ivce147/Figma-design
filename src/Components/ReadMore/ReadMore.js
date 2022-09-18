import React, { useState } from "react";
import LatestNews from "../LatestNews/LatestNews";

import "./ReadMore.css";
function ReadMore() {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <p className="extra-content">     
        <LatestNews />
        <LatestNews />
        <LatestNews />
      </p>
    </div>
  );
  const linkName = readMore ? "Load Less" : "Load More";
  return (
    <div>
      <div
        className="readmore"
        onClick={() => {
          setReadMore(!readMore);
        }}
      >
        <h2>{linkName}</h2>
      </div>
      {readMore && extraContent}
    </div>
  );
}

export default ReadMore;
