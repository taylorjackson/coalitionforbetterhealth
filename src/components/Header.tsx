'use client'

import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Logo } from './Logo'
import { useScrollPosition } from '@/hooks/useScrollPosition'

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const scrollY = useScrollPosition()

    // Calculate header position based on scroll
    // When banner is completely hidden (scrollY >= 150), header moves to top
    const fadeEnd = 150
    const isBannerVisible = scrollY < fadeEnd

    return (
        <header
            className={`fixed left-0 right-0 z-40 border-b border-gray-200/50 bg-white/95 backdrop-blur-sm transition-all duration-300 ${
                isBannerVisible ? 'top-16 sm:top-10' : 'top-0'
            }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Coalition for Better Health</span>
                        <Logo className="h-8 w-8" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
                        Home
                    </a>
                    <a href="/ourframework" className="text-sm font-semibold leading-6 text-gray-900">
                        Our Framework
                    </a>
                    <a href="/blog" className="text-sm font-semibold leading-6 text-gray-900">
                        Blog
                    </a>
                    <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                        About
                    </a>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-16 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:inset-y-12 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="p-6">
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Coalition for Better Health</span>
                                <Logo className="h-8 w-8" />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-8 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a
                                        href="/"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                                    >
                                        Home
                                    </a>
                                    <a
                                        href="/ourframework"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                                    >
                                        Our Framework
                                    </a>
                                    <a
                                        href="/blog"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                                    >
                                        Blog
                                    </a>
                                    <a
                                        href="/about"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                                    >
                                        About
                                    </a>
                                </div>
                                <div className="py-6"></div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
