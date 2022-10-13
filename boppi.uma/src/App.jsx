//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorld1 from "./components/HelloWorld1"
import HelloWorld2 from "./components/HelloWorld2"
//import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
   <div> 
   <BrowserRouter>
<Routes>
<Route path="/" element={<HelloWorld1/>}>


<Route/>

   <Routes/>

   <BrowserRouter/>

   <HelloWorld1/>
   <HelloWorld2/>

    </div>
  
  );
}

export default App;
