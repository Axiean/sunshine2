import React from "react";
import { Button } from "../ButtonElement";
import "./bootstrap.min.css";
import "./FormStyle.css";
export const Form = () => {
  return (
    <form className=" row gy-2">
      <div className=" col-md-12">
        <label for="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          className=" form-control form-control-lg"
          type="text"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className=" col-12">
        <label for="company" className="form-label">
          Company Name
        </label>
        <input
          className="form-control-lg form-control"
          type="email"
          id="company"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="col-12">
        <label for="slct" className="form-label">
          Choose Your Request:
        </label>
        <select
          className="form-select form-select-lg "
          id="slct"
          aria-label="Default select example"
        >
          <option defaultValue value="1">
            UI/UX
          </option>
          <option value="2">WU</option>
          <option value="3">NAYNAY</option>
        </select>
      </div>

      <div className="col-12">
        <label for="exampleFormControlTextarea1" className="form-label">
          Tell Us More
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="4"
        ></textarea>
      </div>

      <Button className="btnSubmit" type="submit">
        Send
      </Button>
    </form>
  );
};
