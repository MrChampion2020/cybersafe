import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SecurityPolicy from "./pages/Secpolicy";
import Trivia from "./pages/Tools/trivia";
import Scanner from "./pages/Tools/scanner";
import PasswordGenerator from "./pages/Tools/passgen";
import Url from "./pages/Tools/url";


import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Headers from "./components/Headers";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';
import UpdatePost from "./pages/UpdatePost";


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about" element={<About />} ></Route> 
        <Route path="/SecurityPolicy" element={<SecurityPolicy />} ></Route> 
        <Route path="/trivia" element={<Trivia />} ></Route>
        <Route path="/url" element={<Url />} ></Route>
        <Route path="/passgen" element={<PasswordGenerator />} ></Route>
        <Route path="/scanner" element={<Scanner />} ></Route>


        <Route path="/sign-in" element={<SignIn />} ></Route>
        <Route path="/sign-up" element={<SignUp />} ></Route>
        <Route path='/search' element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} ></Route>
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
        <Route path="/projects" element={<Projects />} ></Route>
        <Route path='/post/:postSlug' element={<PostPage />} />
  
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}