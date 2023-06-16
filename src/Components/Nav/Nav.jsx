import Link from 'next/link';
import React from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const Nav = () => {
    return (
        <nav className='flex justify-between mb-2 p-5 w-[90%] mx-auto rounded-l-xl rounded-r-xl bg-white font-semibold'>
            <div>
                <ul>
                    <li className='text-2xl'><Link href='/'>HealPoint</Link></li>
                </ul>
            </div>
            <div>
                <ul className='flex gap-6 items-center'>
                    <li><Link href="/services">Services</Link> </li>
                    <li><Link href="/clinices">Clinices</Link></li>
                    <li><Link href="/treatments">Treatments</Link></li>
                    <li className=' border-r-2 h-6 border-slate-200'></li>
                    <li>
                        <select className="select w-12 max-w-xs">
                            <option>En</option>
                            <option>Hindi</option>
                            <option>Bn</option>
                        </select>
                    </li>
                    <li> <HiOutlineMenuAlt4 className='text-xl'></HiOutlineMenuAlt4> </li>
                    <li> <Link href="/help" className='rounded-full border-2 border-black px-4 py-2 font-bold'> Need Help ?</Link> </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;