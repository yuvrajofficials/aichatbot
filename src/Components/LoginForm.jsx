
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      
      <form className="space-y-4">
        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Submit Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600">
          Login
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center my-4">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-gray-500">or</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      {/* Social Login Buttons */}
      <div className="flex justify-center space-x-4">
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white hover:bg-red-600">
          <FaGoogle />
        </button>
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white hover:bg-gray-900">
          <FaGithub />
        </button>
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700">
          <FaFacebook />
        </button>
      </div>

      {/* Link to Create Account */}
      <p className="text-center text-gray-600 mt-4">
        New here?{' '}
        <NavLink to="/aichatbot/signup"  className="text-blue-500 cursor-pointer hover:underline">
          Create an account
        </NavLink>
      </p>
    </div>
  );
};

export default LoginForm;
