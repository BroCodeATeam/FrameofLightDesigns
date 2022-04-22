import React, {useState} from 'react'
import { Link } from 'gatsby'
import Navlinks from './Navlinks'

import Logo from '../../assets/images/Camera-Aperture---Rainbow---Website---Med.png'

export default function Navbar() {

    const styles = {
        className: 'hover:bg-blue-300 text-white px-3 py-2 rounded-md text-sm font-medium'
    }

    return (
        <div className='bg-gradient-to-t from-blue-900 to-blue-600 drop-shadow-lg'>
            <div>
                <img className='' src={Logo} alt=''/>
            </div>
            <div>
                {Navlinks.map(link => (<Link className={styles.className} to={link.link}>{link.title}</Link> ))}
            </div>
        </div>
    );
};