import React from "react";
import Repository from "./Repository";

function Repositories({ currentItems }) {
  return (
    <div className="repositories">
      {currentItems &&
        currentItems.map((item, index) => (
          <Repository key={index} repository={item} />
        ))}
    </div>
  );
}

export default Repositories;