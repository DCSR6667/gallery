import React, { useState } from "react";
import "../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Searchbar = (props) => {
  const [input, setInput] = useState("");

  const value = (event) => {
    setInput(event.target.value);
  };
  const submit = (event) => {
    event.preventDefault();

    props.get(input);
    setInput("");
  };

  return (
    <div className="mt-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-7 col-md-5 col-lg-4 media">
            <form onSubmit={submit}>
              <input
                type="text"
                value={input}
                placeholder="search images"
                onChange={value}
              />
              <button className="btn btn-primary" type="submit">
                <FontAwesomeIcon className="plus-icon" icon={faSearch} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Searchbar;
