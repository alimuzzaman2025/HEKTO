import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import { RouterProvider } from "react-router"
import Home from "./pages/Home"
import RootLayout from "./components/RootLayout"
import ShopGrid from "./pages/ShopGrid"
let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/ShopGrid" element={<ShopGrid/>}></Route>
  </Route>
))


function App() {
  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
