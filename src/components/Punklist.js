import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import CollectionCard from "./CollectionCard";
import "./Punklist.css";

const Punklist = ({ Punks ,  setSelectedPunk }) => {
    let getData=(a)=>{
        setSelectedPunk(a);
        // console.log(a)
    }
  return (
    <div className="punkListContainer">
      <div className="punkList">
        {Punks.map((punk) => (
          <CollectionCard  className="PU" key={punk.id} data={punk} getData={getData}/>
        ))}
      </div>
    </div>
  );
};

export default Punklist;
