import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import { useState } from "react";
import axios from "axios";
import Punklist from "./components/Punklist";
import Main from "./components/Main";
//yarn add axios

function App() {
  const [selectedPunk, setSelectedPunk] = useState(0);
  const Punks = [
    {
      name: "3DPunk",
      id: 0,
      price: 20,
      img: "/punks/6.jpg",
    },
    {
      name: "CigarPunk",
      id: 1,
      price: 14,
      img: "/punks/1.jpg",
    },
    {
      name: "AlienPunk",
      id: 2,
      price: 13,
      img: "/punks/2.jpg",
    },
    {
      name: "PiratePunk",
      id: 3,
      price: 18,
      img: "/punks/3.jpg",
    },
    {
      name: "CyberPunk",
      id: 4,
      price: 23,
      img: "/punks/4.jpg",
    },
    {
      name: "CoolPunk",
      id: 5,
      price: 19,
      img: "/punks/5.jpg",
    },
  ];
  return (
    <div className="app">
      <Header />
      <Main Punks={Punks} selectedPunk={selectedPunk} />
      <Punklist Punks={Punks} setSelectedPunk={setSelectedPunk} />
    </div>
  );
}
export default App;
