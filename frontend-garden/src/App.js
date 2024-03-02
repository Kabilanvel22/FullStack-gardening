import {  Route, Routes, useLocation } from "react-router-dom";
import Signup from "./pages/Signup/signup";
import Login from "./pages/Login/login";
import Home from "./pages/Home/home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import Faq from "./pages/Faq/Faq";
import Growing from "./pages/Guides/Growing";
import Maintain from "./pages/MaintainGarden/Maintain";
import ChilliGrowing from "./pages/plants/plant1";
import Preparegarden from "./pages/PrepareGarden/Preparegarden";
import Privacy from "./pages/Privacy/Privacy";
import Structures from "./pages/Structures/Structures";
import Seasoncrop from "./pages/Seasoncrop/Seasoncrop";
import NoteApp from "./pages/Journal/NoteApp";
import CanvasComponent from "./pages/Visualise/Visualise";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./pages/Loading/Loading";
import Feedback from "./pages/FeedBack/FeedBack";
import Term from "./pages/Term/Term";
import PlantForm from "./Admin/pages/Addplant/Addplant";
import NavBar from "./pages/NavBar/NavBar";
import Footer from "./pages/Footer/Footer";
import Adminlogin from "./Admin/pages/Login/login";
import Plant from "./Admin/pages/Plant/Plant";
import { useSelector } from "react-redux";
import { selectUser } from "./pages/Redux/Userslice";
import PrivateRoutes from "./PrivateRoutes";
import FaqAdd from "./Admin/pages/FaqAdd/FaqAdd";
import FaqList from "./Admin/pages/FaqAdd/FaqList";
import Contactlist from "./Admin/pages/Contact/Contactlist";

function App() {

    const [loading,setLoading] = useState(false);


    const location = useLocation();
    const isAdmin = () => {
      return location.pathname.startsWith("/admin");
    };

    const user = useSelector(selectUser);
    const loggedIn = user.loggedIn;

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      },5000)
    },[])

  return (
    <>
      {!isAdmin() && <NavBar/>}
      <Routes>
      <Route path ="/register" element={<Signup/>}/>
      <Route path ="/login" element={<Login/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route element={<PrivateRoutes/>}>
          <Route path ="/about" element={<About/>}/>
          <Route path ="/contact" element={<Contact/>}/>
          <Route path ="/dashboard" element={<Dashboard/>}/>
          <Route path ="/faq" element={<Faq/>}/>
          <Route path ="/guides" element={<Growing/>}/>
          <Route path ="/plant/:id" element={<ChilliGrowing/>}/>
          <Route path ="/maintain" element={<Maintain/>}/>
          <Route path ="/prepare" element={<Preparegarden/>}/>
          <Route path ="/privacy" element={<Privacy/>}/>
          <Route path ="/structure" element={<Structures/>}/>
          <Route path ="/season" element={<Seasoncrop/>}/>
          <Route path ="/journal" element={<NoteApp/>}/>
          <Route path ="/visualise" element={<CanvasComponent/>}/>
          <Route path ="/feedback" element={<Feedback/>}/>
          <Route path ="/terms" element={<Term/>}/>
          <Route path ="/admin/addplant" element={<PlantForm/>}/>
          <Route path ="/admin/updateplant/:id" element={<PlantForm/>}/>
          <Route path ="/admin/faqlist" element={<FaqList/>}/>
          <Route path ="/admin/update/ques/:id" element={<FaqAdd/>}/>
          <Route path ="/admin/plantlist" element={<Plant/>}/>
          <Route path="/admin/faqadd" element={<FaqAdd/>}/>
          <Route path="/admin/contactlist" element={<Contactlist/>}/>
          </Route>
          <Route path ="/admin/login" element={<Adminlogin/>}/>
          
      </Routes>
      {!isAdmin() && <Footer/>}
      </>
    );
}

export default App;
