import React from 'react';
import { Link } from 'react-router';
import { PlusIcon } from "lucide-react";

const Navbar = () => {
    return (
        <header className='bg-base-300 border-b border-base-content/10'>
            <div className='mx-auto max-w-6xl p-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img src="/mernRookieLogo.svg" alt="MERN Rookie Logo" className='h-10 w-10' />
                        <h1 className='text-3xl font-bold text-primary font-mono tracking-tight'>MERN Rookie</h1>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Link to={"/create"} className='btn btn-primary'>
                            <PlusIcon className='size-5' />
                            <span>New Note</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;