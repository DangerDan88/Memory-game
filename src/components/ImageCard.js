import React from "react";

function ImageCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          // onClick={() => props.redisplayFood(props.id)}
          alt={props.name}
          src={props.image}
        />
      </div>
    </div>
  );
}

export default ImageCard;
