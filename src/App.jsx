import { Routes, Route } from 'react-router-dom';
import Login from './Components/Pages/Login/Login';
import SignIn from './Components/Pages/signIn/signIn';
import HomePage from './Components/Pages/HomePage'



function App() {
  return (

    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signIn' element={<SignIn/>} />
      <Route path='/homepage' element={<HomePage/>} />
    </Routes>
  );
}

export default App;
