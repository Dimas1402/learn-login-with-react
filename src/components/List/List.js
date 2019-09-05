import React from "react";
import "./List.css";
const List = ({ nomor, email, password }) => {
  return (
    <div className="card">
      <p className="tagP">
        {nomor}.Email    :{email}
        <br></br>
        Password :{password}
      </p>
    </div>
  );
};

export default List;
