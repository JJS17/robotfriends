import React from "react";
import { Card } from "./Card";

export const CardList = ({ robots }) => {
  // if (true) {
  //   throw new Error(`OUPSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS!!!!!`);
  // }
  return (
    <div className="">
      {robots.map((e) => {
        return (
          <Card
            key={e.id}
            id={e.id}
            name={e.name}
            username={e.username}
            email={e.email}
          />
        );
      })}
    </div>
  );
};
