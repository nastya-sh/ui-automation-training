import React from "react";

import "./tab-menu.css";

const TabMenu = () => {
  return (
    <ul className="tab-list">
      <li className="tab-item__active tab-item fa fa-image fa-3x " />
      <li className="tab-item fa fa-th-large fa-3x" />
      <li className="tab-item fa fa-map-marker fa-3x" />
      <li className="tab-item fa fa-comment fa-3x" />
      <li className="tab-item fa fa fa-square fa-3x" />
      <li className="tab-item fa fa-flag fa-3x" />
    </ul>
  );
};
export default TabMenu;
