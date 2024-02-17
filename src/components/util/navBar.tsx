import { useMediaQuery } from "@/hooks/useMediaQuery";
import Link from "next/link";
import { Button } from "../ui/button";
import { DiscordLogoIcon, GitHubLogoIcon, HeartFilledIcon, InfoCircledIcon, Link1Icon, PlusIcon, SymbolIcon } from "@radix-ui/react-icons";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import ThemeToggle from "./themeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function NavBar() {

    const isDesktop = useMediaQuery('(min-width: 1024px)');

    if (isDesktop) {
        return (
            <>
                <div className="min-w-full bg-background fixed">
                    <div className='flex float-start px-24 py-6 text-4xl'>
                        <Avatar>
                            <AvatarFallback className='bg-destructive text-xl'>EB</AvatarFallback>
                            <AvatarImage src={'/favicon.ico'} />
                        </Avatar>
                        <span className='text-primary transition duration-300 group'>
                            <Link href={'/'}>
                                Experimenter
                            </Link>
                        </span>
                    </div>
                    <div className='flex float-end px-24 py-6'>
                        <Link className='mx-1' href={'#features'}>
                            <Button variant={'secondary'}>
                                Feautures
                            </Button>
                        </Link>
                        <Popover>
                            <PopoverTrigger>
                                <Button className='mx-1' variant={'secondary'}><Link1Icon className='mr-2 text-primary' />Links</Button>
                            </PopoverTrigger>
                            <PopoverContent className='w-fit p-2'>
                                <div className="grid gap-4">
                                    <div className="grid items-center">
                                        <Link href={''}>
                                            <Button variant={'link'}>
                                                <DiscordLogoIcon className='mr-2' />Discord Support Server
                                            </Button>
                                        </Link>
                                    </div>
                                    <div className="grid items-center">
                                        <Link href={''}>
                                            <Button variant={'link'}>
                                                <PlusIcon className='mr-2' />Invite Me
                                            </Button>
                                        </Link>
                                    </div>
                                    <div className="grid items-center">
                                        <Link href={''}>
                                            <Button variant={'link'}>
                                                <HeartFilledIcon className='mr-2' />Vote for me
                                            </Button>
                                        </Link>

                                    </div>
                                    <div className="grid items-center">
                                        <Link href={''}>
                                            <Button variant={'link'}>
                                                <GitHubLogoIcon className='mr-2' />GitHub
                                            </Button>
                                        </Link>

                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                        <Button className='mx-1 transition duration-300 hover:bg-primary hover:border-primary hover:text-background' variant={'outline'}>Get Started</Button>
                        <ThemeToggle isDesktop></ThemeToggle>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
        </>
    )
}