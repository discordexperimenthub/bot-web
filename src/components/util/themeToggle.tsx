import { Button } from "../ui/button";
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'

export default function ThemeToggle({
    isDesktop
}: {
    isDesktop: boolean
}) {

    const { theme, setTheme } = useTheme()

    function toogleTheme() {
        return theme === 'dark' ? setTheme('light') : setTheme('dark')
    }

    return (
        <Button onClick={() => toogleTheme()} variant={"outline"}>
            {theme === 'dark' ? <MoonIcon className="m-1" /> : <SunIcon className="m-1" />} {!isDesktop ? 'Toggle Theme' : ''}
        </Button>
    )
}