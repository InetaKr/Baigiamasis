import "./styling/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/PageParts/Header";
import Home from "./components/PageParts/Home";
import SignIn from "./components/User/SignIn";
import SignUp from "./components/User/SignUp";
import Forum from "./components/PageParts/Forum";
import AddQuestion from "./components/Questions/AddQuestion";
import EditQuestion from "./components/Questions/EditQuestion";
import AnswerPage from "./components/PageParts/AnswerPage";
import Footer from "./components/PageParts/Footer";


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/add" element={<AddQuestion />} />
        <Route path="/editQuestion/:id" element={<EditQuestion />} />
        <Route path="/question/:id" element={<AnswerPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
