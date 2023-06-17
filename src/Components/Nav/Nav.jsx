import Link from 'next/link';
import React from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineStar } from 'react-icons/ai';
import './Nav.css'

const Nav = () => {
    return (
        <nav className='nav-head'>
            <div className='nav-title'>
                <AiOutlineStar className='nav-head-icon'></AiOutlineStar>
                <Link href='/'><span>HealPoint</span> </Link>
            </div>
            <div>
                <ul className='nav-links'>
                    <li><Link href="/services">Services</Link> </li>
                    <li><Link href="/clinices">Clinices</Link></li>
                    <li><Link href="/treatments">Treatments</Link></li>
                    <li className='border-r-2 h-6 border-slate-200 hidden lg:block'></li>
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