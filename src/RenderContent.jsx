import { useState } from "react";
import { RenderValues } from "./RenderValues";

export const RenderContent = ({ item }) => {
  const dates = Object.keys(item);
  const [selectedDate, setSelectedDate] = useState(dates.length > 0 ? dates[0] : null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div 
        className={`values-item  ${isOpen ? "active" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedDate?.replace(/-/g, " ")}
        <span className={`arrow ${isOpen ? "rotate" : ""}`}>&#9662;</span>
      </div>

      {isOpen && (
        <div className="values-list-date">
          {dates.map((date, index) => (
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

      {selectedDate && (
        <div>
          <RenderValues values={item[selectedDate]} />
        </div>
      )}
    </div>
  );
};
