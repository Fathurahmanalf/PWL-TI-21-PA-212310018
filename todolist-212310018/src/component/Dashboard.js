import React from "react";
import List from "../widget/List";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">TodoSearch</h1>
        <div className="container d-flex justify-content-between align-items-center mt-3">
          <div className="flex-grow-1 mx-3">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Search.."
            />
          </div>
          <div>
            <button type="button" className="btn btn-primary mx-1">
              Search
            </button>
            <Link to="/input" className="btn btn-primary">
              Add Data
            </Link>
          </div>
        </div>
      </div>

      <div>
        <List />
      </div>
    </div>
  );
};

export default Dashboard;
