const navigation = {
    main: [
        { name: 'Home', href: '/' },
        { name: 'Our Framework', href: '/ourframework' },
        { name: 'Blog', href: '/blog' },
        { name: 'About', href: '/about' },
    ],
}

interface FooterProps {
    showBorder?: boolean
}

export function Footer({ showBorder = true }: FooterProps) {
    return (
        <footer className="bg-white">
            <div
                className={`mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8 ${
                    showBorder ? 'border-t border-gray-900/10' : ''
                }`}
            >
                <nav
                    className="-mb-6 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-12 sm:space-y-0"
                    aria-label="Footer"
                >
                    {navigation.main.map(item => (
                        <div key={item.name} className="pb-6">
                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>

                <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                    &copy; 2025 Coalition for Better Health Care Society, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
