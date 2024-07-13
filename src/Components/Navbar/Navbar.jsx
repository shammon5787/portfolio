import React from 'react'
import logo from '../../assets/images/logo.png'
import NavLinkData from '../../Constants/Index.jsx'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div className='w-full h-[15vh] mx-auto items-center justify-between flex font-titleFont sticky'>
            <img className='w-[50px] rounded-full cursor-pointer ' src={logo} alt="" />
            <div>
                <ul className='flex items-center gap-10'>
                    {
                        NavLinkData.map(({ title, _id, links }) => (
                            <li className='cursor-pointer hover:text-designColor duration-300 text-base tracking-wide font-normal text-gray-400' key={_id}>
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