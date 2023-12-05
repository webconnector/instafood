import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { PiBowlFoodFill } from "react-icons/pi"
import Button from '../layouts/Button'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'

const Navbar = () => {
    // state for the mobile menu 
    const [menu, setMenu] = useState(false);

    // function to handle the menu change 
    const handleChange = () => {
        setMenu(!menu);
    }

    const closeMenu = () => {
        setMenu(false);
    }
    return (
        // navigation 
        <div className='fixed w-full z-50'>
            <div>
                <div className='flex flex-row justify-between p-5 px-5 md:px-32 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
                    <div className='flex flex-row items-center cursor-pointer hover:text-brightColor '>
                        <span>
                            <PiBowlFoodFill size={32} />
                        </span>
                        <h1 className='text-xl font-semibold'>Instafood</h1>
                    </div>
                    <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
                        <Link to='home' spy={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Home</Link>
                        <Link to='about' spy={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>About</Link>
                        <Link to='menu' spy={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Menu</Link>
                        <div className='relative group'>
                            <div className='flex items-center gap-1'>
                                <Link to='dishes' spy={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Dishes</Link>
                                <BiChevronDown className="cursor-pointer" size={25} />
                            </div>
                            <ul className='absolute hidden space-y-2 group-hover:block p-5'>
                                <li>
                                    <Link to='spicy' spy={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Spicy</Link>
                                </li>
                                <li>
                                    <Link to='tasty' spy={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Tasty</Link>
                                </li>
                                <li>
                                    <Link to='cripsy' spy={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Cripsy</Link>
                                </li>
                                <li>
                                    <Link to='delicious' spy={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Delicious</Link>
                                </li>
                            </ul>
                        </div>
                        <Link to='reviews' spy={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Reviews</Link>
                        <Link to='getintouch' spy={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Get Intouch</Link>
                        <Button title="Login" />
                    </nav>
                    {/* hamburger  */}
                    <div className='md:hidden flex items-center'>
                        {menu ?
                            (<AiOutlineClose size={25} onClick={handleChange} />) : (
                                <AiOutlineMenuUnfold size={25} onClick={handleChange} />
                            )
                        }
                    </div>
                </div>
                <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-1xl text-center pt-8 pb-4 gap-6 w-full h-fit transition-transform duration-300`}>
                    <Link to='home' spy={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Home</Link>
                    <Link to='menu' spy={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Menu</Link>
                    <Link to='dishes' spy={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Dishes</Link>
                    <Link to='reviews' spy={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Reviews</Link>
                    <Link to='about' spy={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>About</Link>
                    <Link to='contact' spy={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Get Intouch</Link>
                    <Button title="Login" />
                </div>

            </div>
        </div>
    );
};

export default Navbar
