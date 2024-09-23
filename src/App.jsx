import { Routes, Route } from 'react-router-dom';
import Login from './Components/Pages/Login/Login';



function App() {
  return (

    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signIn' element={<signIn />} />
    </Routes>
  );
}

export default App;
