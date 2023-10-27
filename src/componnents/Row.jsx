import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { MyContext } from '../Mycontext';

export default function Row(props) {
  const { data, setData } = useContext(MyContext);
  const destroy = () => {
    setData(data.filter(ele => ele.id != props.item.id))
  };
  return (
    <div
      className="m-12 px-4 pb-2 flex justify-between border-b"
    >
      <div className="flex">
        <button className="p-1 rounded bg-red-600 h-fit">
          <Icon
            className="text-white text-xl"
            icon="material-symbols:delete-outline"
            onClick={() => destroy()}
          />
        </button>
        <div className="pl-3 flex flex-col items-start">
          <h2 className="text-blue-400 font-bold">{props.item.petName}</h2>
          <h4>
            <span className="text-blue-400">Owner:</span>
            {props.item.ownerName}
          </h4>
          <p>{props.item.aptNotes}</p>
        </div>
      </div>
      <h3>{props.item.aptDate}</h3>
    </div>
  );
}
