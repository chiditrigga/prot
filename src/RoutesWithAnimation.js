import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Projectss from "./Projectss";
import Contact from "./contact";
import { AnimatePresence,motion } from "framer-motion";



function RoutesWithAnimation(){
    const location = useLocation();
    console.log(location.key)

    return (
        <AnimatePresence>

     

       
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}/>
            <Route path="/project" element={<Projectss/>}/>
            <Route path="/contact" element={<Contact/>} />
        </Routes>
        
        </AnimatePresence>
    )
}

export default RoutesWithAnimation