import {  Route, Routes } from 'react-router-dom';
import Showable from './Components/Showable';
import LoginForm from './Components/LoginForm';
import CreateAccountForm from './Components/CreateAccountForm';

const App = () => {
  return (
   <>
      <Routes>
        <Route path='/aichatbot' element={<Showable/>} />
        <Route path='/aichatbot/login' element={<LoginForm />} />
        <Route path='/aichatbot/signup' element={<CreateAccountForm />} />
      </Routes>
   </>
  );
};

export default App;
