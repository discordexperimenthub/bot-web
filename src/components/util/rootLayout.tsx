'use client';
import NavBar from "./navBar";
import { ThemeProvider } from "./themeProvider"
import { useTheme } from 'next-themes'

export default function RootLayout({
    children,
    noNavBar,
}: {
    children: React.ReactNode,
    noNavBar?: boolean,
}) {

    const { systemTheme } = useTheme();

    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme={!systemTheme ? 'dark' : systemTheme}
                    enableSystem
                    disableTransitionOnChange
                >
                    <main>
                        {noNavBar ? <></> : <NavBar></NavBar>}
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html >
    )
}
