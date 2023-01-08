import React, { useEffect, useState } from "react";
import Display from "./component/Display";
import "./App.css";

export default function App() {
  const [user, setUser] = useState([]);
  const [querry, setQuerry] = useState("");

  function getData() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }

  useEffect(() => {
    getData();
  }, []);

  const search = (user) => {
    return user.filter((item) =>
      item.title.toString().toLowerCase().includes(querry)
    );
  };

  return (
    <div className="App">
      <div className="header">
        <input
          className="search"
          placeholder="search"
          onChange={(event) => setQuerry(event.target.value)}
        />
      </div>
      <div className="content">
        <Display user={search(user)} />
      </div>
    </div>
  );
}
//<button onCLick >

//function if(true)
