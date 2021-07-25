import { useEffect, useState } from "react";
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {

    const [showNavLinks, setShowNavLinks] = useState(false);

    useEffect(() => {
        if (window.innerWidth >= 768) {
            setShowNavLinks(true);
        }
    }, []);

    const closeNavlinks = () => { if (window.innerWidth < 768) { setShowNavLinks(false) } }


    return (
        <nav className={"fixed md:relative p-4 inset-x-0 top-0 z-50 bg-white"} >
            {/* md:max-w-screen-xl  xl:mx-auto */}
            <div className="flex justify-between items-center px-0 md:px-4">
                <span role="link" className="cursor-pointer">
                    <Link href="/" aria-role="home" >
                        <a>
                            <Image src="/brand.svg" alt="defi network llc logo" width={225.63} height={48} />
                        </a>
                    </Link>
                </span>

                <button className="-mt-2 md:hidden flex justify-center items-center" onClick={() => setShowNavLinks(!showNavLinks)}>
                    {!showNavLinks && <Image src="/menu.svg" width={24} height={24} alt="open mobile menu" />}
                    {showNavLinks && <Image src="/closeMenu.svg" width={24} height={24} alt="close mobile menu" />}

                </button>
                <div className={`transition-opacity-top duration-500 ease-out pb-12 md:pb-0 flex fixed left-0 right-0 top-0 -z-1 lg:z-10 pt-24 md:pt-0 bg-white sapce-y-4 md:space-y-0 
                                 md:flex flex-col md:flex-row md:relative flex-1 justify-center items-center font-medium ` +
                    (showNavLinks ? 'opacity-1 bottom-0' : 'opacity-0 -top-full bottom-full')}>

                    <div className="md:mr-4 mb-4 md:mb-0 lg:mr-8 text-center">
                        <a href="/#projects" onClick={closeNavlinks}>Projects</a>
                    </div>
                    <div className="md:mr-4 mb-4 md:mb-0 lg:mr-8 text-center">
                        <a href="/#services" onClick={closeNavlinks}>Services</a>
                    </div>
                    <div className="md:mr-4 mb-4 md:mb-0 lg:mr-8 text-center">
                        <a href="/#technologies" onClick={closeNavlinks}>Technologies</a>
                    </div>
                    <div className="md:mr-4 mb-4 md:mb-0 lg:mr-8 text-center">
                        <a href="/#team" onClick={closeNavlinks}>Team</a>
                    </div>
                    <div className="md:mr-4 mb-4 md:mb-0 lg:mr-8 text-center">
                        <a href="/#partnerships" onClick={closeNavlinks}>Partnerships</a>
                    </div>
                    <div className="md:mr-4 mb-4 md:mb-0 lg:mr-8 text-center">
                        <a href="/#faq" onClick={closeNavlinks}>FAQ</a>
                    </div>
                    <div className="text-center">
                        <a href="/#contact" onClick={closeNavlinks}>Get in Touch</a>
                    </div>
                    <div className="mt-auto block cursor-pointer md:hidden border-solid border-2 w-4/5 text-center  py-2 text-defi-blue transition duration-500 ease-in-out hover:bg-defi-blue hover:text-white border-defi-blue  font-bold">
                        <a href="/#contact" className="hover:text-white" onClick={closeNavlinks}>
                            Schedule a call
                        </a>
                    </div>
                </div>

                <div className="cursor-pointer hidden md:block border-solid border-2 px-3 py-2 text-defi-blue transition duration-500 ease-in-out hover:bg-defi-blue hover:text-white border-defi-blue font-bold">
                    <a href="/#contact" className="hover:text-white" onClick={closeNavlinks}>
                        Schedule a call
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
