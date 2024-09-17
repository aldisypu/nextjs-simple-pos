'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/dashboard' },
    { name: 'Category', href: '/dashboard/categories' },
    { name: 'Product', href: '/dashboard/products' },
    { name: 'Sale', href: '/dashboard/sales' },
];

export function NavLinks() {
    const pathname = usePathname()

    return (
        <>
            {links.map((link) => {
                return (
                    <li key={link.name}>
                        <Link
                            href={link.href}
                            className={clsx(
                                'block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700',
                                {
                                'block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700': pathname === link.href,
                                },
                            )}
                            >
                            {link.name}
                        </Link>
                    </li>
                );
            })}
        </>
)
}