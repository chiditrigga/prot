import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import './index.css'
import { createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
  } from 'react-router-dom'
  import { AnimatePresence } from "framer-motion";
import Header from "./Header";



function App() {
  const router = createBrowserRouter(
    
    createRoutesFromElements(

   
      <Route>
      
            <Route index element={<Home />} />
       
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
         
       
         
        
        {/* private page */}
      

       
        
        
     
    
      </Route>
    
    )
  );
  return (
    <>
   
      
     <AnimatePresence >
    
      <RouterProvider  router={router} />
    </AnimatePresence> 

    
    </>
  );
}

export default App;
