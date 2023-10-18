
import './App.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,RouterProvider
} from "react-router-dom";
import Home from './components/Home';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/"element={<Home />}></Route>
    )
  );
  
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
