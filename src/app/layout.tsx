import type { Metadata } from 'next'
import '../style/globals.css'


export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}


export default async function Root({
    children,
}: {
    children: React.ReactNode
}) {

    return <>
        {children}
    </>
}