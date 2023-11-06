import Home from "./Home";
import Projectss from "./Projectss";
import Contact from "./contact";


import {Route,BrowserRouter,Routes
  } from 'react-router-dom'




function App() {

 


  return (
    <>
    <BrowserRouter>
   
    <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/project" element={<Projectss/>}/>
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
