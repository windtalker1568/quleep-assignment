import React from "react";
import "../App.css";
import DisplayPerCard from "./DisplayPerCard";
function Display({ user }) {
  console.log(user);
  const data = Object.values(user).map((value, idx) => {
    return (
      <div key={idx}>
        <DisplayPerCard value={value} idx={idx} />
      </div>
    );
  });
  return <div>{data}</div>;
}
export default Display;
