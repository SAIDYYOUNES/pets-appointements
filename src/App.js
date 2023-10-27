import "./App.css";
import { useState, React } from "react";
import { MyContext } from "./Mycontext";
import Row  from "./componnents/Row";
import { FormApp } from "./componnents/FormApp";
import Appointements from "./componnents/Appointements";

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <MyContext.Provider value={{ data, setData }}>
        <FormApp />
        <Appointements />
        {/* <Row /> */}
      </MyContext.Provider>
    </div>
  );
}

export default App;
