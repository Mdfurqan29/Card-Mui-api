import Home from "../../screens/home";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom" 
import About from "../../screens/about";



const AppRouter = () => {
  return <Router>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
  </Router>
}

export default AppRouter;
