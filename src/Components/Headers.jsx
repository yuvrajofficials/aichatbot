
import { AiOutlineRobot } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="h-16 w-full flex items-center justify-between bg-white overflow-hidden">
      <div className="flex items-center text-2xl mx-4 font-bold text-[#3369ff]">
        <AiOutlineRobot className="mx-1" />
        <h1>ChatBOT</h1>
      </div>
      <div className="flex items-center">
        <NavLink to="/aichatbot/login" className="bg-white text-blue-500 py-1 px-4 font-bold text-md border-blue-500 border-2 mx-2 rounded-lg hover:bg-blue-50">
          Log In
        </NavLink>
        <NavLink to="/aichatbot/signup" className="bg-blue-500 text-white py-1 px-4 font-bold text-md border-blue-500 border-2 mx-2 rounded-lg hover:bg-blue-600">
          Sign Up
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
