import Image from 'next/image'
import { FaAngleRight } from 'react-icons/fa';
import { BiCaretRight } from 'react-icons/bi';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { TiLocationArrow } from 'react-icons/ti';
import { BiPin } from 'react-icons/bi';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import flower from '../../public/download.png'
import children from '../../public/children.jpg'
import leaf from '../../public/leaf.png'
import man1 from '../../public/man1.png'
import girl1 from '../../public/girl11.jpg'
import blue from '../../public/blue.jpg'
import orange from '../../public/orange.png'
import green from '../../public/green.jpg'
import girl2 from '../../public/girl2.jpg'
import love2 from '../../public/love.png'
import man2 from '../../public/man2.jpg'
import ballon from '../../public/redBallon.png'

function Home() {
  return (
    <main>
      <div className='flex flex-col lg:flex-row lg:w-[90%] mx-auto mt-10 gap-20 relative'>
        <div className='lg:w-[50%] space-y-6 '>
          <p className='uppercase border-2 border-stone-600 rounded-full px-3 py-1 inline-block font-bold'>Mental Health At 30'S</p>
          <h2 className='text-8xl'>Beat your <br /> anxierty with <br />therapy</h2>
          <p className='border-4 rounded-md border-orange-600 -rotate-2 lg:w-[60%] relative -top-32 left-0'></p>
          <p className='font-bold'>To live life to the fullest,we're <br /> countinuing to find ways.</p>

          <Image src={ballon} alt='ballon' className='static lg:absolute  bottom-20 left-96 w-32'></Image>

          <div className='flex flex-col lg:flex-row gap-5 items-center'>
            <button className='bg-black text-white px-5 py-2 rounded-full flex items-center gap-1'>Get Help <FaAngleRight className='text-orange-500'></FaAngleRight></button>
            <button className='px-3 py-2 bg-yellow-400 rounded-lg'> <BiCaretRight></BiCaretRight></button>
            <span>Play Reviews </span>
          </div>
        </div>


        <div className='lg:w-[50%] relative'>
          <TiLocationArrow className='static lg:absolute  left-28 top-16 w-12 h-8 rotate-90'></TiLocationArrow>
          <p className='static lg:absolute  left-10 top-9 bg-orange-300 rounded-lg px-2 font-bold'>Happier</p>
          <Image src={man1} alt='man' className='static lg:absolute  left-40 top-4 w-full lg:w-44'></Image>

          <TiLocationArrow className='static lg:absolute  left-20 bottom-16 w-12 h-8'></TiLocationArrow>
          <p className='static lg:absolute  left-2 bottom-10 bg-lime-300 rounded-lg px-2 font-bold'>Relaxed</p>
          <Image src={girl1} alt='girl1' className='static lg:absolute  lg:w-40 left-16 top-56 rounded-full'></Image>

          <Image src={blue} alt='blue' className='static lg:absolute  w-6 left-32 bottom-0 rounded-full bg-green-600 '></Image>

          <BiPin className='static lg:absolute  rotate-45 p-2 right-28 bottom-36 w-12 h-12 z-10 bg-white rounded-full'></BiPin>
          <TiLocationArrow className='static lg:absolute  -rotate-90 right-20 bottom-8 w-12 h-8'></TiLocationArrow>
          <p className='static lg:absolute  right-3 bottom-2  bg-orange-300 rounded-lg px-2 font-bold'>Positive</p>
          <Image src={girl2} alt='girl2' className='static lg:absolute  lg:w-56 right-28 bottom-10 rounded-full'></Image>
          <Image src={love2} alt='love2' className='static lg:absolute  w-10 right-60 bottom-28 rounded-full'></Image>

          <Image src={green} alt='green' className='static lg:absolute  w-6 right-16 bottom-32 rounded-full '></Image>

          <TiLocationArrow className='static lg:absolute  rotate-180 right-1 top-16 w-12 h-8'></TiLocationArrow>
          <p className='static lg:absolute  -right-10 top-12  bg-teal-300 rounded-lg px-2 font-bold'>Calm</p>
          <Image src={man2} alt='man2' className='static lg:absolute  lg:w-40 lg:h-40 right-10 top-24 rounded-lg'></Image>
          <Image src={love2} alt='love2' className='static lg:absolute  w-10 right-44 rotate-45 top-32 rounded-full'></Image>

          <div className='bg-amber-700 inline-block rounded-md p-1 static lg:absolute  right-2 top-40'>
            <div className='flex gap-2'>
              <IoMdCheckmarkCircleOutline className='w-5 h-5 text-white'></IoMdCheckmarkCircleOutline>
              <HiOutlineMenuAlt4 className='w-5 h-5 text-white'></HiOutlineMenuAlt4>
            </div>
          </div>

          <Image src={orange} alt='green' className='static lg:absolute  w-6 right-28 top-12 rounded-full'></Image>

        </div>
      </div>

      <div className='bg-green-950 mt-10 lg:h-[350px] flex flex-col lg:flex-row justify-center items-center gap-10 relative'>
        <div className='flex flex-col gap-5'>
          <p className='border-2 hidden lg:block h-28 rounded-lg border-l-4'></p>
          <p className='border-2 hidden lg:block h-28 rounded-lg border-slate-400 border-l-4'></p>
        </div>
        <div>
          <Image src={children} className='w-96 rounded-lg' alt='children'></Image>
        </div>
        <div className='space-y-5'>
          <button className='text-white px-3 py-1 border-2 border-white mt-5 rounded-full'>CARING IS ALWAYS FREE</button>
          <h2 className='text-5xl text-white'>We help you to <br /> <span className='text-yellow-400 border-b-2 border-orange-500'>grow confidence </span> <br />at any age</h2>
          <Image src={flower} alt='flower' className='w-28 static lg:absolute bottom-0 right-10'></Image>
          <Image src={leaf} alt='leaf' className='static lg:absolute  -left-6 w-20 bottom-36'></Image>
        </div>
      </div>
    </main>
  )
}

export default Home