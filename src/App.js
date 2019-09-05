import React, { Component } from "react";
import List from "./container/List";
import Form from "./container/Form";
import  './App.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          email: "frontend@gmail.com", 
          password: "12345"
        }
      ]

    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangePassword= this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeText(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onChangePassword(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, data, password } = this.state;
    if (email === undefined || email === "") {
      alert("Email kosong");
    }else if(password === undefined || password === ""){
      alert("Password kosong")
    } else {
      data.push({ email, password });
      this.setState({
        data,
        email: "",
        password: ""
      });
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        <Form
          onChange={this.onChangeText}
          onChanges={this.onChangePassword}
          value={email}
          pass={password}
          onSubmit={this.onSubmit}
        />
        <List data={this.state.data} />
    
      </>
    );
  }
}

