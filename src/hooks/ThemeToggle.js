import { useEffect, useRef, useState } from 'react';

import { MoonIcon, SunIcon } from '@heroicons/react/outline';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

function update() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark', 'changing-theme');
    } else {
        document.body.classList.remove('dark', 'changing-theme');
    }

    document.dispatchEvent(new Event('themeChange'));

    window.setTimeout(() => {
        document.body.classList.remove('changing-theme');
    });
}

function useTheme() {
    let [setting, setSetting] = useState('system')
    let initial = useRef(true)

    useIsomorphicLayoutEffect(() => {
        let theme = localStorage.theme
        if (theme === 'light' || theme === 'dark') {
            setSetting(theme)
        }
    }, [])

    useIsomorphicLayoutEffect(() => {
        if (setting === 'system') {
            localStorage.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        } else if (setting === 'light' || setting === 'dark') {
            localStorage.theme = setting
        }
        if (initial.current) {
            initial.current = false
        } else {
            update()
        }
    }, [setting])

    useEffect(() => {
        let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        mediaQuery.addEventListener('change', update)
        update()

        function onStorage() {
            update()
            let theme = localStorage.theme
            if (theme === 'light' || theme === 'dark') {
                setSetting(theme)
            } else {
                setSetting(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
            }
        }

        window.addEventListener('storage', onStorage)

        return () => {
            mediaQuery.removeEventListener('change', update)
            window.removeEventListener('storage', onStorage)
        }
    }, [])

    return [setting, setSetting]
}

export default function ThemeToggle() {
    let [setting, setSetting] = useTheme();

    return setting === 'light' ? (
        <div className="cursor-pointer mt-0.5" onClick={() => setSetting("dark")}>
            <SunIcon className="w-5 h-5 " selected={false} />
        </div>
    ) : (
        <div className="cursor-pointer mt-0.5" onClick={() => setSetting("light")}>
            <MoonIcon className="w-5 h-5" selected={false} />
        </div>
    )
}