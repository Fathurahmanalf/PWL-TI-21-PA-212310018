import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <h1>TodoList</h1>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-primary flex-grow-1 mx-5">All</button>
          <button className="btn btn-primary flex-grow-1 mx-5">Done</button>
          <button className="btn btn-primary flex-grow-1 mx-5">Todo</button>
        </div>
{/* 
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default List;
