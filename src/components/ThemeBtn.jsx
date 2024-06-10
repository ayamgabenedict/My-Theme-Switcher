import React from 'react';
import useTheme from '../contexts/theme';

const ThemeBtn = () => {
    const {themeMode, lightTheme, darkTheme} = useTheme()

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkTheme()
        } else {
            lightTheme()
        }
    }
    return (
        <label className="relative inline-flex items-center">
            <input
                type="checkbox"
                value="" 
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === 'dark'}
            />
            <span className={`mr-3 text-sm font-medium ${themeMode === 'dark'? 'text-gray-900': 'text-gray-400'}`}>Light</span>
            <div className={`w-11 h-6 peer-focus:outline-none ring-4 ring-gray-300 peer-focus:ring-4 
            ${themeMode === 'dark'? 'after:bg-black bg-gray-200': 'after:bg-white bg-gray-900'}
            peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer: dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[48px]  after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white peer-checked:outline-none cursor-pointer`}></div>
            <span className={`ml-3 text-sm font-medium ${themeMode === 'light'? 'text-gray-900': 'text-gray-400'}`}>Dark</span>
        </label>
    );
}

export default ThemeBtn
