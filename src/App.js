import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./components/pages/About/About";
import Blogs from "./components/pages/Blogs/Blogs";
import Blog from "./components/pages/Blog/Blog";
import NotFound from "./components/pages/NotFound/NotFound";
import HomeOne from "./components/pages/HomeOne/HomeOne";
import HomeTwo from "./components/pages/HomeTwo/HomeTwo";
import HomeThree from "./components/pages/HomeThree/HomeThree";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    {/*<Route path="/*" element={<Navigate to="/about" />} />*/}

                    <Route path="/" element={<HomeOne/>}/>
                    <Route path="/home" element={<HomeOne/>}/>
                    <Route path="/home-2" element={<HomeTwo/>}/>
                    <Route path="/home-3" element={<HomeThree/>}/>

                    <Route path="/about" element={<About/>}/>
                    <Route path="/blog/*" element={<Blogs/>}/>
                    <Route path="/blog/:postId" element={<Blog/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
