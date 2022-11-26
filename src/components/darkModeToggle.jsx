import React, { useState } from 'react';
import { DarkModeSwitch } from "react-toggle-dark-mode";

import useDarkMode from './useDarkMode';

function DarkModeToggle() {

    const [colorTheme, setTheme] = useDarkMode();
    const [isDarkMode, setDarkMode] = useState( colorTheme === "light");

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkMode(checked);
    };


  return (
    <div>
        <DarkModeSwitch
        onChange={toggleDarkMode} 
        checked={isDarkMode}
        size={25}
        />
    </div>
  );
}

export default Switcher;