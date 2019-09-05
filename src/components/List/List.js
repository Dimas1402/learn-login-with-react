import React from "react";
import "./List.css";
const List = ({ nomor, email, password }) => {
  return (
    <div className="card">
      <p className="tagP">
        {nomor}.<a className="tagA">Email  </a>  :{email}
        <br></br>
        <a className="tagA">Password  </a>   :{password}
      </p>
    </div>
  );
};

export default List;
