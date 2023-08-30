import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import BounceEffect from "./components/bounceEffect/BounceEffect";
import FadeEffect from "./components/fadeEffect/FadeEffect";
import FlipEffect from "./components/flipEffect/FlipEffect";
import HingeEffect from "./components/hingeEffect/HingeEffect";
import JackInTheBoxEffect from "./components/jackInTheBoxEffect/JackInTheBoxEffect";
import RollEffect from "./components/rollEffect/RollEffect";
import RotateEffect from "./components/rotateEffect/RotateEffect";
import SlideEffect from "./components/slideEffect/SlideEffect";


function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/bounce" element={ <BounceEffect/> } />
        <Route path="/fade" element={ <FadeEffect/> } />
        <Route path="/flip" element={ <FlipEffect/> } />
        <Route path="/hinge" element={ <HingeEffect/> } />
        <Route path="/jackinthebox" element={ <JackInTheBoxEffect/> } />
        <Route path="/roll" element={ <RollEffect/> } />
        <Route path="/rotate" element={ <RotateEffect/> } />
        <Route path="/slide" element={ <SlideEffect/> } />
       </Routes>
      </Router>
    </div>
  )
}

export default App