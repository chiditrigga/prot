import Home from "./Home";
import Projectss from "./Projectss";

import About from "./about";
import { createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  useLocation,Router,BrowserRouter,Routes
  } from 'react-router-dom'
  import { AnimatePresence,motion } from "framer-motion";
import LocationProvider from "./LocationProvider"
import RoutesWithAnimation from "./RoutesWithAnimation"



function App() {

 


  return (
    <>
    <BrowserRouter>
   
   <LocationProvider>
    <RoutesWithAnimation/>
    </LocationProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
