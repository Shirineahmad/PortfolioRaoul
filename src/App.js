import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./component/Header";
import SideBar from "./component/sideBar";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import ContactInfo from "./pages/contactInfo";
import "./App.css"
import { useState,useEffect} from "react";


function App() {
  const [contactInfoDesc, SetContactInfoDesc] = useState({});
  const fetchData = () => {
   fetch("http://localhost:5000/api/get/contactInfoDesc")
      .then((response) =>   response.json())
      .then((contactInfoDesc) =>   SetContactInfoDesc(contactInfoDesc.data[0]))
      
   
   .catch((error) =>console.log(error))
  }
  console.log(contactInfoDesc);
 useEffect(() => {
   fetchData();
   }, []);
 

  return (
    <Router>
      <div className="Container">
        <section>
          <Header />
        </section>

        <section>
          <div className="sectionSideBar">
            <div className="sideBar">
              <SideBar />
            </div>
            <div className="contain">
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route
                  path="/contactInfo"
                  element={
                    // idk ? idk ? idk.map((contact) => (
                    <ContactInfo
                      key={contactInfoDesc._id}
                      contactDes={contactInfoDesc.contactDes}
                      phoneNb={contactInfoDesc.phoneNb}
                      email={contactInfoDesc.email}
                      linekdinLink={contactInfoDesc.linekinLink}
                      fbLink={contactInfoDesc.fbLink}
                      instagramLink={contactInfoDesc.instagramLink}
                    />
                  }
                />
              </Routes>
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
