import React from "react";
import "./SidebarItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const SidebarItems = (props) => {

  const navigate = useNavigate();
  return (
    <div className="sidebaritems" onClick={() =>{navigate(`/${props.items}`)}} >
      <div className="sidebaricon">
        <FontAwesomeIcon
          className="icon"
          icon={`fa-solid ${props.icon} fa-2xl`}
        />
      </div>
      <div className="sidebaritemp">
        <p>{props.items}</p>
      </div>
    </div>
  );
};

export default SidebarItems;
