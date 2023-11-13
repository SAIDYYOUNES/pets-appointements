import Row from "./Row";
import { MyContext } from "../Mycontext";
import { useEffect, useContext, useState } from "react";

export default function Appointments() {
  const { data, setData } = useContext(MyContext);
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState("petName");
  const [selectedOrder, setSelectedOrder] = useState("asc");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOrderChange = (event) => {
    setSelectedOrder(event.target.value);
  };

  const loadData = async () => {
    try {
      await fetch("/data.json");
      fetch("/data.json")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const filterItem = (item) => {
    return item[selectedOption].toLowerCase().includes(search)
    
  }



  return (
    <div>
      <div className="flex border border-purple-200 rounded mx-12">
        <input
          autoComplete="off"
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="block w-full px-4 py-2 bg-white border rounded-md focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
        />
        <select
          className="text-white bg-blue-400"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="petName">Sort by</option>
          <option value="petName">Pet Name</option>
          <option value="ownerName">Owner Name</option>
          <option value="aptDate">Date</option>
        </select>
        <select
          className="text-white bg-blue-400"
          value={selectedOrder}
          onChange={handleOrderChange}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div>
        {data
          .filter(filterItem)
          .sort((a, b) => (a[selectedOption] > b[selectedOption] ? 1 : -1) * (selectedOrder === "asc" ? 1 : -1)
          )
          .map((item, index) => (
            <Row key={index} item={item} />
          ))}
      </div>
    </div>
  );
}
