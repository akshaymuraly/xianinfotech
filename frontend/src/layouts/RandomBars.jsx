import React, { useState, useEffect } from "react";

const RandomBars = ({ count = 23, minHeight = 10, maxHeight = 60, barWidth = 16, barGap = 4 }) => {
  const [heights, setHeights] = useState([]);
  useEffect(() => {
    const randomHeights = Array.from({ length: count }, () =>
      Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight
    );
    setHeights(randomHeights);
  }, [count, minHeight, maxHeight]);

  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: `${barGap}px`,paddingLeft:"23px" }}>
      {heights.map((height, index) => (
        <div
          key={index}
          style={{
            height: `${height}px`,
            width: `${barWidth}px`,
            backgroundColor: `#157AFF`
          }}
        />
      ))}
    </div>
  );
};

export default RandomBars;
