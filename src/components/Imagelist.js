import React from "react";
const Imagelist = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.images.map((image) => {
          return (
            <div className="col-md-4 mt-3" key={image.id}>
              <img
                className="card-img-top fit"
                src={image.urls.regular}
                alt="hidden"
                width="100%"
                height="330px"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Imagelist;
