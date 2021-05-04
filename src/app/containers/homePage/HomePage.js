import React from "react";
import ButtonBases from "../../components/ButtonBases/ButtonBases";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import MessageAtCenter from "../../components/MessageAtCenter/MessageAtCenter";
import CoverContainer from "../../components/CoverContainer//CoverContainer"
import './HomePage.css'

export default function HomePage() {
  return (
    <div>
      <CoverContainer/>
      <MessageAtCenter/>
      <ButtonBases/>
      <ItemListContainer/>
    </div>
  );
}
