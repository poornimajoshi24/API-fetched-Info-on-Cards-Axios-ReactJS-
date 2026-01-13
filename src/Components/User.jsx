import React from "react";

const User = ({ elem }) => {
  const clr1 = Math.floor(Math.random() * 256);
  const clr2 = Math.floor(Math.random() * 256);
  const clr3 = Math.floor(Math.random() * 256);

  return (
    <div
      className="user-card"
      style={{ backgroundColor: `rgb(${clr1},${clr2},${clr3})` }}
    >
      <h1>Name:{elem.name}</h1>
        <h2>Email:{elem.email}          </h2>
        <h2>Phone:{elem.phone}</h2>
        <h2>Website:{elem.website}</h2>

    </div>
  );
};

export default User;
