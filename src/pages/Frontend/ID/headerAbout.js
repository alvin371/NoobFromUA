import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "./../../../assets/img/HD Logo.png"

const Header = () => {
    const [navbar, setNavbar] = useState(false)

    const [isOpen, setIsOpen] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <div className="relative z-10">
            <a href="https://web.whatsapp.com/send?phone=6281216610559&text=Helo Java Agro Globalindo, I'm interested in your product .." className="flex flex-row w-40 h-auto top-24 sm:top-28 right-5 fixed bg-green-500 hover:bg-green-400 px-3 lg:py-4 py-2 lg:w-44 rounded-tl-full rounded-bl-full rounded-br-full z-100">
                <p className="text-white font-bold text-sm lg:text-base"><i className="fab fa-whatsapp text-xl mx-2"></i>Hubungi Kami!</p>
            </a>
            <header className="absolute z-100 bg-white dark:bg-gray-800 pb-9">
                <nav className={navbar ? 'fixed w-screen bg-gray-900 shadow-lg' : 'fixed w-screen bg-white lg:bg-white shadow-lg'}>
                    <div className="container px-6 py-3 mx-auto lg:flex lg:justify-between lg:items-center">
                        <div className="flex items-center justify-between">
                            <div className="mr-2 md:mr-5 lg:mr-5 xl:mr-5">
                                <img src={logo} alt="" className="w-16 md:w-20 lg:w-20 xl:w-20" />
                            </div>
                            <div>
                                <Link to="/" className={navbar ? 'text-2xl font-bold text-white dark:text-white lg:text-3xl hover:text-gray-300 dark:hover:text-gray-300' : 'text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'}
                                >

                                    Java Agro Globalindo</Link>
                            </div>
                            <div className="flex lg:hidden">
                                <button type="button"
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                    aria-label="toggle menu">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path fillRule="evenodd" className={!isOpen ? 'block' : 'hidden'}
                                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                        </path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="-mt-6 h-6 w-6 " viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" className={isOpen ? 'block' : 'hidden'}
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className={`${isOpen ? 'block' : 'hidden'} items-center lg:flex`}>
                            <div className="flex flex-col lg:flex-row xl:mx-12 2xl:mx-24">
                                <Link className={navbar ? 'my-1 text-sm font-medium navbar-text lg:mx-4 lg:my-0' : 'my-1 text-sm font-medium navbar-first lg:mx-4 lg:my-0'}
                                    to="/">Beranda</Link>
                                <Link className={navbar ? 'my-1 text-sm font-medium navbar-text lg:mx-4 lg:my-0' : 'my-1 text-sm font-medium navbar-first lg:mx-4 lg:my-0'}
                                    to="/product">Product Kami</Link>
                                {/* <Link className={navbar ? 'my-1 text-sm font-medium navbar-text lg:mx-4 lg:my-0' : 'my-1 text-sm font-medium navbar-first lg:mx-4 lg:my-0'}
                                    to="/faq">FAQ</Link> */}
                                <Link className={navbar ? 'my-1 text-sm font-medium navbar-text lg:mx-4 lg:my-0' : 'my-1 text-sm font-medium navbar-first lg:mx-4 lg:my-0'}
                                    to="/about">Tentang Kami</Link>
                            </div>
                            <div>
                                <Link className={navbar ? 'my-1 text-sm font-medium navbar-text lg:mx-4 lg:my-0 nav-scroll-active' : 'my-1 text-sm font-medium navbar-first lg:mx-4 lg:my-0  nav-lang-active'}
                                    to="/about">ID</Link>
                                <span className={navbar ? 'my-1 text-sm font-medium navbar-text lg:mx-4 lg:my-0 ' : 'my-1 text-sm font-medium navbar-first lg:mx-4 lg:my-0 '}>|</span>
                                <Link className={navbar ? 'my-1 text-sm font-medium navbar-text lg:mx-4 lg:my-0' : 'my-1 text-sm font-medium navbar-first lg:mx-4 lg:my-0'}
                                    to="/en/about">EN</Link>
                            </div>
                            <div className="items-end">
                                <Link className={navbar ? 'my-1 text-sm font-medium navbar-text lg:mx-4 lg:my-0' : 'my-1 text-sm font-medium navbar-first lg:mx-4 lg:my-0'}
                                    to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div >
    )
}

export default Header