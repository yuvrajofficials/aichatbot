
const ComponentLeft = () => {
  return (
    <div className="h-screen  w-64 bg-white shadow-lg p-4 overflow-y-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Conversations</h2>
      <ul className="space-y-3">
        {/* Sample conversation items */}
        <li className="p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
          <p className="text-sm text-gray-700">Conversation 1</p>
        </li>
        <li className="p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
          <p className="text-sm text-gray-700">Conversation 2</p>
        </li>
        <li className="p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
          <p className="text-sm text-gray-700">Conversation 3</p>
        </li>
        <li className="p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
          <p className="text-sm text-gray-700">Conversation 4</p>
        </li>
        {/* Add more items as needed */}
      </ul>
    </div>
    
  );
};

export default ComponentLeft;
