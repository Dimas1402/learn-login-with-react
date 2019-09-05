import React, { Component } from "react";
import { Button, Form, Input } from "../components/Form";
import './Form.css';

class FormContainer extends Component {
  render() {
    return (
      <div>
        <h3 className="text">Email : </h3>
      <Form onSubmit={this.props.onSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email..."
          onChange={this.props.onChange}
          value={this.props.value}
        />
        <br></br>
        <h3 className="text">Password :</h3>
        <Input 
          type="password" 
          name="password" 
          placeholder="Password..." 
          onChange={this.props.onChanges} 
          value={this.props.pass} />
          <br></br>
        <Button textButton="Kirim" />
      </Form>
      </div>
    );
  }
}

export default FormContainer;