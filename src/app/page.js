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

function Home() {
  return (
    <main className='bg-[#F7F6F2] font-serif'>
      <nav className='flex justify-between mb-2 p-5 w-[90%] mx-auto rounded-l-xl rounded-r-xl bg-white font-semibold'>
        <div>
          <ul>
            <li className='text-2xl'>HealPoint</li>
          </ul>
        </div>
        <div>
          <ul className='flex gap-6 items-center'>
            <li><a href="">Services</a> </li>
            <li><a href="">Clinices</a></li>
            <li><a href="">Treatments</a></li>
            <li className=' border-r-2 h-6 border-slate-200'></li>
            <li>
              <select className="select w-12 max-w-xs">
                <option>En</option>
                <option>Bn</option>
              </select>
            </li>
            <li> <HiOutlineMenuAlt4 className='text-xl'></HiOutlineMenuAlt4> </li>
            <li> <a href="" className='rounded-full border-2 border-black px-4 py-2 font-bold'> Need Help ?</a> </li>
          </ul>
        </div>
      </nav>


      <div className='flex w-[90%] mx-auto mt-10 gap-20'>
        <div className='w-[50%] space-y-6'>
          <p className='uppercase border-2 border-stone-600 rounded-full px-3 py-1 inline-block font-bold'>Mental Health At 30'S</p>
          <h2 className='text-8xl'>Beat your <br /> <span className='border-b-4 border-orange-600'>anxierty</span> with <br />therapy</h2>
          <p className='font-bold'>To live life to the fullest,we're <br /> countinuing to find ways.</p>

          <div className='flex gap-5 items-center'>
            <button className='bg-black text-white px-5 py-2 rounded-full flex items-center gap-1'>Get Help <FaAngleRight className='text-orange-500'></FaAngleRight></button>
            <button className='px-3 py-2 bg-yellow-400 rounded-lg'> <BiCaretRight></BiCaretRight></button>
            <span>Play Reviews </span>
          </div>
        </div>


        <div className='w-[50%] relative'>
          <TiLocationArrow className='absolute left-28 top-16 w-12 h-8 rotate-90'></TiLocationArrow>
          <p className='absolute left-10 top-9 bg-orange-300 rounded-lg px-2 font-bold'>Happier</p>
          <Image src={man1} alt='man' className='absolute left-40 top-4'></Image>

          <TiLocationArrow className='absolute left-20 bottom-16 w-12 h-8'></TiLocationArrow>
          <p className='absolute left-2 bottom-10 bg-lime-300 rounded-lg px-2 font-bold'>Relaxed</p>
          <Image src={girl1} alt='girl1' className='absolute w-40 left-16 top-56 rounded-full'></Image>

          <Image src={blue} alt='blue' className='absolute w-6 left-32 bottom-0 rounded-full bg-green-600 '></Image>

          <BiPin className='absolute rotate-45 p-2 right-28 bottom-36 w-12 h-12 z-10 bg-white rounded-full'></BiPin>
          <TiLocationArrow className='absolute -rotate-90 right-20 bottom-8 w-12 h-8'></TiLocationArrow>
          <p className='absolute right-3 bottom-2  bg-orange-300 rounded-lg px-2 font-bold'>Positive</p>
          <Image src={girl2} alt='girl2' className='absolute w-56 right-28 bottom-10 rounded-full'></Image>
          <Image src={love2} alt='love2' className='absolute w-10 right-60 bottom-28 rounded-full'></Image>

          <Image src={green} alt='green' className='absolute w-6 right-16 bottom-32 rounded-full '></Image>

          <TiLocationArrow className='absolute rotate-180 right-1 top-16 w-12 h-8'></TiLocationArrow>
          <p className='absolute -right-10 top-12  bg-teal-300 rounded-lg px-2 font-bold'>Calm</p>
          <Image src={man2} alt='man2' className='absolute w-40 h-40 right-10 top-24 rounded-lg'></Image>
          <Image src={love2} alt='love2' className='absolute w-10 right-44 rotate-45 top-32 rounded-full'></Image>

          <div className='flex'>
            <HiOutlineMenuAlt4 className='absolute rotate-180 right-1 top-16 w-12 h-8'></HiOutlineMenuAlt4>
            < IoMdCheckmarkCircleOutline className='absolute rotate-180 right-1 top-16 w-12 h-8'></IoMdCheckmarkCircleOutline>

          </div>


          <Image src={orange} alt='green' className='absolute w-6 right-28 top-12 rounded-full '></Image>

        </div>
      </div>

      <div className='bg-green-950 mt-10 h-[350px] flex justify-center items-center gap-10 relative'>
        <div className='flex flex-col gap-5'>
          <p className='border-2 h-28 rounded-lg border-l-4'></p>
          <p className='border-2 h-28 rounded-lg border-slate-400 border-l-4'></p>
        </div>
        <div>
          <Image src={children} className='w-96 rounded-lg' alt='children'></Image>
        </div>
        <div className='space-y-5'>
          <button className='text-white px-3 py-1 border-2 border-white mt-5 rounded-full'>CARING IS ALWAYS FREE</button>
          <h2 className='text-5xl text-white'>We help you to <br /> <span className='text-yellow-400 border-b-2 border-orange-500'>grow confidence </span> <br />at any age</h2>
          <Image src={flower} alt='flower' className='w-28 absolute bottom-0 right-10'></Image>
          <Image src={leaf} alt='leaf' className='absolute -left-6 w-20 bottom-24'></Image>
        </div>
      </div>
    </main>
  )
}

export default Home