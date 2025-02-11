import React from "react";

export const RenderValues = ({ values }) => {
  // Count occurrences of each value
  const valueCount = values.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  // Convert object to array for rendering
  const uniqueValues = Object.entries(valueCount);

  return (
    <div className="values-container">
      <ul className="values-list">
        {uniqueValues.map(([strategy, count], idx) => (
          <li key={idx} className="values-item">
            <div>{strategy}</div>
            <div className="count">
                <div>&#x2022;</div>
                {count} {count === 1 ? "Strategy" : "Strategies"}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
