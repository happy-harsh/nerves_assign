import { useState } from "react";
import { RenderValues } from "./RenderValues";
import { dateArray } from "./constant/data";

export const RenderContent = ({ item, view }) => {
  const [selectedDates, setSelectedDates] = useState(dateArray.length > 0 ? [dateArray[0]] : []);

  // Handle checkbox selection
  const handleCheck = (date) => {
    setSelectedDates((prev) =>
      prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
    );
  };

  return (
    <div>
      <div className="values-list-date">
        {dateArray.map((date, index) => (
          <div className="values-item" key={index}>
            <input
              type="checkbox"
              checked={selectedDates.includes(date)}
              onChange={() => handleCheck(date)}
            />
            <label>{date.replace(/-/g, " ")}</label>
          </div>
        ))}
      </div>

      {selectedDates.length > 0 ? (
        selectedDates.map((date) =>
          item[date] ? (
            <div key={date}>
              <RenderValues values={item[date]} selectedDate={date} />
            </div>
          ) : (
            <div key={date} className="no-strategies">
              <p>
                No strategies available for <span>{date.replace(/-/g, " ")}</span> {view}
              </p>
            </div>
          )
        )
      ) : (
        <p>Please select at least one date.</p>
      )}

      <button onClick={()=>{setSelectedDates(dateArray.length > 0 ? [dateArray[0]] : [])}}>Reset</button>
    </div>
  );
};
