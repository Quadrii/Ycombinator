"use client"
import React from 'react';
import {logout} from "@/lib/actions/auth";

const SignOutButton = () => {
    return (
        <div className="flex items-center">
            <button className='login-btn font-bold cursor-pointer' onClick={() => logout()}>LogOut</button>
        </div>
    );
};

export default SignOutButton;