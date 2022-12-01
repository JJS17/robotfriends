import React from "react";

export const Card = ({ id, name, username, email }) => {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
      <h2>{`${name}`}</h2>
      <p>{`${username}`}</p>
      <p>{`${email}`}</p>
    </div>
  );
};
