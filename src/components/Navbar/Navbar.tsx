import { useDarkMode } from 'hooks/useDarkMode';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    const [theme,themeToggler] = useDarkMode()
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href="/"><a >Home</a></Link>
                        
                    </li>
                    <li>
                        <Link href="/about">
                        <a >About</a>
                        </Link>
                        
                    </li>
                </ul>
            </nav>

                <button 
                onClick={() => themeToggler}>
                    {theme === 'light' ? 'light' : 'dark'}
                </button>
        </div> 
    )
}

export default Navbar;
