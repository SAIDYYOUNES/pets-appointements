import Row from "./Row";
import { MyContext } from "../Mycontext";
import { useEffect, useContext, useState } from "react";

export default function Appointements() {
  const { data, setData } = useContext(MyContext);
  const [search, setSearch] = useState("");


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
  useEffect(() => {
    // console.log(search);
   const filtred=data.filter((item) => {
      return item.petName.toLowerCase().includes(search);
    });
    setData(filtred)
  }, [search]);
  return (
    <div>
      <div className="flex border border-purple-200 rounded">
        <input
          autoComplete="off"
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md  focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
        />
      </div>
      <div>
        {
          data.map((item, index) => (
            <Row key={index}  item={item} />
          ))}
      </div>
    </div>
  );
}
