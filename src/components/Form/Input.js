import React from "react";
import './Input.css'

const Input = ({ type, onChange, value, name, placeholder }) => (
<input className="input" placeholder={placeholder} type={type} onChange={onChange} value={value} name={name} />
);

export default Input;
