import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

function Navbar() {
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/my-account"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/my-orders"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/sign-in"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Sign in
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    sony@tail.com
                </li>
                <li>
                    <NavLink
                        to="/my-orders"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-black' />
                    <div>
                        {context.count}
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;