import React from 'react';
import Image from "next/image";
import SignOutButton from "@/components/SignOutButton";
import Link from "next/link";
import SignInButton from "@/components/SignInButton";
import {auth} from "@/auth";

const Navbar =  async () => {
    const session = await auth()
    return (
        <header className="navbar px-5 py-3 bg-white shadow-sm font-work-sans text-black">
            <nav className="navbar-brand flex justify-between items-center">
                <>
                    <Link href="/">
                        <Image src='/logo.png' alt='brand' width={50} height={50} unoptimized={true}/>
                    </Link>
                    <div className='flex items-center gap-5'>
                        {session && session?.user ? (
                            <>
                                <Link href='/startup/create'>
                                    <span className='text-black'>Create</span>
                                </Link>

                                <span>
                                    <SignOutButton/>
                                </span>

                                <Link href={`/user/${session.user.id}`} passHref>
                                    <span className='text-black'>{session.user.name}</span>
                                </Link>
                            </>
                        ) : (
                            <>
                                <SignInButton/>
                            </>
                        )}
                    </div>
                </>
            </nav>
        </header>
    );
};

export default Navbar;