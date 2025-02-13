import { useState } from "react";
import { strategyArray } from "./constant/data";
import { RenderContent } from "./RenderContent";

function App() {
  const [currentView, setCurrentView] = useState("Bullish");




  return (
    <div className="container">
      <div className="tabs">
        {strategyArray.map((elem, index) => (
          <div
            key={index}
            className={`tab ${currentView === elem.View ? "active" : ""}`}
            onClick={() => setCurrentView(elem.View)}
          >
            {elem.View}
          </div>
        ))}
      </div>

      {strategyArray.map((elem) =>
        elem.View === currentView ? (
          <RenderContent key={elem.View} item={elem.Value} view={elem.View} />
        ) : null
      )}
      {/* <h1>{counter}</h1>
      <button onClick={handleClick}>Reset</button> */}
    </div>
  );
}

export default App;
