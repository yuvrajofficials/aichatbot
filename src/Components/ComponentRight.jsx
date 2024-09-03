import { BiPlusCircle } from "react-icons/bi"
import { GoPaperAirplane } from "react-icons/go"
const ComponentRight = () => {
  return (
<>

<div className="h-screen flex items-end justify-center w-full bg-gray-100">
     
      <div className="flex  w-8/12  items-center justify-center space-x-4 bg-white p-4 rounded-lg shadow-lg">
        <button className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-lg hover:bg-blue-600">
          <BiPlusCircle className="w-8 h-8"/>
        </button>
        <textarea rows={2}
          type="text"
          placeholder="Enter the text"
          className="border border-gray-300 p-2 w-10/12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white h-12 w-12 flex items-center justify-center  rounded-lg hover:bg-blue-600">
          <GoPaperAirplane className="h-8 w-8"/>
        </button>
      </div>
    </div>
</>
  )
}

export default ComponentRight
