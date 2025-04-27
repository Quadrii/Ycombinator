"use client"
import React from 'react';
import {login} from "@/lib/actions/auth";

const SignInButton = () => {
    return (
        <div className="flex items-center">
            <button className='login-btn font-bold cursor-pointer' onClick={() => login()}>
                Login
            </button>
        </div>
    );
};

export default SignInButton;