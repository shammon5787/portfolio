import React from 'react'
import logo from '../../assets/images/logo.png'
import NavLinkData from '../../Constants/Index.jsx'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div className='w-full h-[15vh] sticky top-0 z-50 mx-auto items-center justify-between flex font-titleFont border-b-[1px] border-b-gray-700'>
            <img className='w-[50px] rounded-full cursor-pointer ' src={logo} alt="" />
            <div>
                <ul className='flex items-center gap-10'>
                    {
                        NavLinkData.map(({ title, _id, links }) => (
                            <li className='cursor-pointer hover:text-green-300 duration-300 text-base tracking-wide font-normal text-gray-400 bg-bodyColor' key={_id}>
                                <Link
                                activeClass="active" 
                                to={links} 
                                spy={true} 
                                smooth={true} 
                                offset={-70} 
                                duration={500} 
                                // onSetActive={handleSetActive}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar