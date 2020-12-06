import React, { useEffect, useState } from "react";
import ControlPanel from "./ControlPanel";
import ServiceCard from "./ServiceCard";

function Catalog() {
  return (
    <>
      <ControlPanel />
      <ServiceCard />
    </>
  );
}

export default Catalog;
