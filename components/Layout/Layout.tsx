import React from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import ContactForm from '../ContactForm';
import Image from 'next/image'
import Meta from '../Meta';

const Layout = (props: any) => {
    const { children } = props;
    return (
        <>
            <Meta />
            <div className="font-avenir">
                <Navbar></Navbar>
                {children}
                <ContactForm />
                <footer className="mt-32 lg:max-w-4xl xl:max-w-5xl xl:pl-8 2xl:max-w-7xl lg:mx-auto px-4 lg:px-0">
                    <div className="flex flex-col">
                        <div className="grid md:grid-cols-3 gap-12">
                            <div>
                                <Image src="/Union.svg" alt="the defi network logo" width={40} height={40} />
                                <p className="text-lg">Step into blockchain.</p>
                            </div>
                            <div >
                                <p className="mb-3 font-bold">Contact us —</p>
                                <Link href="mailto:info@thedefi.network">info@thedefi.network</Link>
                                <p className="mb-3 mt-16 font-bold">Location —</p>
                                <p>California, USA</p>
                            </div>
                            <div className="flex gap-20 lg:gap-0 lg:justify-between lg:pl-8">
                                <ul className="space-y-5">
                                    <li>
                                        <Link href="/#home">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/#projects">Projects</Link>
                                    </li>
                                    <li>
                                        <Link href="/#services">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/#technologies">Technologies</Link>
                                    </li>
                                    <li>
                                        <Link href="/#team">Team</Link>
                                    </li>
                                    <li>
                                        <Link href="/#partnerships">Partnerships</Link>
                                    </li>
                                    <li>
                                        <Link href="/#faq">FAQ's</Link>
                                    </li>
                                    <li>
                                        <Link href="/#contact">Get in touch</Link>
                                    </li>
                                </ul>
                                <ul className="space-y-5">
                                    <li>
                                        <Link href="https://twitter.com/thedefinetwork">Twitter</Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/projects">Facebook</Link>
                                    </li> */}
                                    {/* <li>
                                        <Link href="/services">Instagram</Link>
                                    </li> */}
                                    {/* <li>
                                        <Link href="/technologies">Medium</Link>
                                    </li>
                                    <li>
                                        <Link href="/team">Github</Link>
                                    </li> */}

                                </ul>
                            </div>
                        </div>
                        <div className="pt-20 pb-5">
                            <span >&#169; Copyright {new Date().getFullYear()} The DeFi Network. All rights reserved.</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Layout













