import type { Metadata } from 'next'
import '../style/globals.css'


export const metadata: Metadata = {
    title: 'Experimenter',
    description: 'Experimenter. A Bot for Discord',
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