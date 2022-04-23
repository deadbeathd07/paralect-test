import React from "react";

function Repository({ repository }) {
  return (
    <div className="repository">
      <h2 className="repository__title">{repository.name}</h2>
      <p className="repository__text">{repository.description}</p>
    </div>
  );
}

export default Repository;
