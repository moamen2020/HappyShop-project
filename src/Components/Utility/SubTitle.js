import React from "react";
import { Link } from "react-router-dom";
const SubTitle = ({ title, btntitle, pathText }) => {
  return (
    <div className="d-flex justify-content-between pt-4">
      <div className="sub-tile">{title}</div>
      <div className="shopping-now">{btntitle}</div>
    </div>
  );
};

export default SubTitle;