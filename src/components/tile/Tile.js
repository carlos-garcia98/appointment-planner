import React from "react";

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {Object.values(description).map((key, index) => {
        return (
          <p key={index} className="tile">
            {key}
          </p>
        );
      })}
    </div>
  );
};
