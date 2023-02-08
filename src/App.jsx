import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/PageParts/Header';
import Home from './components/PageParts/Home';
import SignIn from './components/User/SignIn';
import SignUp from './components/User/SignUp';
import Forum from './components/PageParts/Forum';
import AddQuestion from './components/Questions/AddQuestion';

const App = () => {
  return (
    <>
    <Header />
     <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/signIn' element={<SignIn/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/forum' element={<Forum/>} />
        <Route path='/add' element={<AddQuestion />}/>
        <Route  />
        <Route  />
        
      </Routes>
    </>
  );
}

export default App;
