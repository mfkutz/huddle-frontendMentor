import logo from '../src/images/logo.svg'
import mockups from '../src/images/mockups.svg'
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";


function App() {

  return (

    <div className="bg-Violet bg-no-repeat bg-contain lg:bg-cover bg-mobile xl:bg-desktop lg:bg-desktop min-h-screen lg:p-14 lg:pl-[75px] p-10 ">
      <header>
        <img src={logo} alt="logo" className='lg:w-[220px] w-[150px]' />
      </header>

      <div className='flex justify-center gap-16 lg:mt-[6%] mt-[50px] flex-col lg:flex-row '>

        <div className=' lg:max-w-[60%]'>
          <img src={mockups} alt="mockups" />
        </div>

        <div className=' lg:max-w-[40%] flex flex-col justify-center items-center lg:items-start'>
          <h1 className='lg:text-[40px] text-[25px] lg:text-left text-center text-gray-200 font-semibold lg:mt-12 textShadow'>
            Build The Community Your Fans Will Love
          </h1>
          <p className='text-gray-200 mt-5 openSans text-[18px] lg:text-left text-center'>
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
            Create connections with your users as you engage in genuine discussion.
          </p>
          <button className='hover:bg-Soft-Magenta hover:text-gray-100 shadowButton bg-white text-Violet lg:py-4 lg:px-16 py-[10px] w-[390px] rounded-[40px] mt-6 text-[18px] max-w-[200px]'>
            Register
          </button>
          <div className=' flex lg:w-full lg:justify-end'>
            <div className='flex justify-end lg:mt-[176px] md:mt-[30px] mt-[70px] gap-3 lg:mt-90 '>
              <RiFacebookCircleFill color='white' size={44} className='icon' />
              <RiTwitterFill className='icon' color='white' size={44} />
              <RiInstagramLine className='icon' color='white' size={44} />
            </div>

          </div>
        </div>
      </div>

    </div>




  )
}

export default App
