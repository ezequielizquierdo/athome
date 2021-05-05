import React from "react";
import ButtonBases from "../../components/ButtonBases/ButtonBases";
import MessageAtCenter from "../../components/MessageAtCenter/MessageAtCenter";
import CoverContainer from "../CoverContainer/CoverContainer"
import './HomePage.css'

export default function HomePage() {
  return (
    <div>
      <CoverContainer/>
      <MessageAtCenter/>
      <ButtonBases/>
    </div>
  );
}

