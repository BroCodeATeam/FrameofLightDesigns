import {navLinks} from "./navLinks";
import MenuItems from "./MenuItems";

import Logo from '../../assets/images/Camera-Aperture---Rainbow---Website---Med.png'

const Navbar = () => {
    return (
        <nav className='w-full h-auto bg-gradient-to-b from-blue-500 to-slate-500'>
            <div>
                <img src={Logo} alt='Frame of Light Designs Logo'/>
            </div>
            <ul className="menus">
                {navLinks.map((menu, index) => {
                    const depthLevel = 0;
                    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                })}
            </ul>
        </nav>
    );
};

export default Navbar;