import React, { useState } from "react";
import axios from "axios";
import User from "./Components/User";


const App = () => {
  const [allData, setAllData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setAllData(response.data);
  };
// getData(); agar sirf ye likehnege aur button onlick event nahi lagayenege toh khud he Chalta rahega data fetch karna aur disco color bante jaaetneg chnage hote jaayenge boxes k
// baar baar getData call hota rahega khud se hee
  return ( 
    <div>
      <button onClick={getData}>Get Data</button>

      <div className="all-cards">
        {allData.map((elem) => (
          <User key={elem.id} elem={elem} />
        ))}
      </div>
    </div>
  );
};

export default App;
