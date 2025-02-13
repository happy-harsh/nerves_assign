import React, { useState } from "react";

export const RenderValues = ({ values }) => {
  const [message, setMessage] = useState("");

  const valueCount = values.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  const uniqueValues = Object.entries(valueCount);

  const handleMessage = (s, c) => {
    setMessage(s)
    setTimeout(() => {
      setMessage("")
    }, 3000);

  };

  return (
    <div className="values-container">
      <ul className="values-list">
        {uniqueValues.map(([strategy, count], idx) => (
          <div key={idx}>
            <li key={idx} className="values-item" onClick={()=>{handleMessage(strategy, count)}}>
                <div>{strategy}</div>
                <div className="count">
                  <div>&#x2022;</div>
                  {count} {count === 1 ? "Strategy" : "Strategies"}
                </div>
              </li>
          </div>
        ))}
      </ul>
      <p>Total Card Results: {uniqueValues.length}</p>
      <p>{message}</p>
    </div>
  );
};

