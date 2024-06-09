import React, { Component } from "react";
import { Link } from "react-router-dom";

class Input extends Component {
  
    render() {
    return (
      <div>
        <div className="text-center">
          <h1 className="my-5">TodoInput</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="w-75 mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Add.."
            />
          </div>
          <button type="button" className="btn btn-primary w-75">
            <Link to="/dashboard" className="btn btn-primary">
              Submit
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Input;
