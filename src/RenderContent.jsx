import { useState } from "react";
import { RenderValues } from "./RenderValues";
import { dateArray } from "./constant/data";

export const RenderContent = ({ item }) => {
  const [selectedDate, setSelectedDate] = useState(dateArray.length > 0 ? dateArray[0] : null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div 
        className={`values-item ${isOpen ? "active" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedDate?.replace(/-/g, " ")}
        <span className={`arrow ${isOpen ? "rotate" : ""}`}>&#9662;</span>
      </div>
      {isOpen && (
        <div className="values-list-date">
          {dateArray.map((date, index) => (
            <div
              key={index}
              className={`values-item ${selectedDate === date ? "active" : ""}`}
              onClick={() => {
                setSelectedDate(date);
                setIsOpen(false);
              }}
            >
              {date.replace(/-/g, " ")}
            </div>
          ))}
        </div>
      )}
      {selectedDate && item[selectedDate] ? (
        <div>
          <RenderValues values={item[selectedDate]} selectedDate={selectedDate} />
        </div>
      ) : (
        <div className="no-strategies">
          <p>No strategies available for <span>{selectedDate?.replace(/-/g, " ")}</span></p>
        </div>
      )}
    </div>
  );
};
