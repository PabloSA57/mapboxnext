import { useDarkMode } from 'hooks/useDarkMode';
import React from 'react'

const Header = () => {
    useDarkMode()
    return (
        <div>Header</div>
    )
}

export default Header;
