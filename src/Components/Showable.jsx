import ComponentLeft from "./ComponentLeft"
import ComponentRight from "./ComponentRight"
import Headers from "./Headers"

const Showable = () => {
  return (
<>
<div className="bg-gray-100 w-screen h-screen">


<Headers/>
<div className="flex">
    <ComponentLeft className="w-24"/>
    <ComponentRight />
</div>
</div>
</>
 )
}

export default Showable
