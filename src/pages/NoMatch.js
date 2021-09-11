import React from "react";
import { useLocation } from "react-router-dom";

function NoMatch() {
  const location = useLocation();
  return (
    <div>
      <h2>{location.pathname}</h2>
    </div>
  );
}

export default NoMatch;
