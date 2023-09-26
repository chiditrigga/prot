import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import { createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
  } from 'react-router-dom'

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
<RouterProvider router={router} />
    
    </>
  );
}

export default App;
