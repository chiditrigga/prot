import Home from "./Home";
import Projects from "./Projects";
import { createBrowserRouter,
  Route,Routes,
  createRoutesFromElements,
  RouterProvider
  } from 'react-router-dom'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        
          <Route index element={<Home />} />
       
        <Route path="/project" element={<Projects />} />
        
        
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
