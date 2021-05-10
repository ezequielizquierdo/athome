import React from "react";
import AppRouter from "./app/containers/AppRouter/AppRouter";
import './App.css'
import AppContextProvider from "./app/Context/CartContext";

export default function App() {
  return (
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  );
}
