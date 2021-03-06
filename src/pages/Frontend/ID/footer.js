const footer = () => {
    return (
        <div>
            <footer className="mt-32 w-screen">
                <div className=" bg-gray-800 pt-32 ">
                    <div className="container mx-auto flex lg:flex-row flex-col">
                        <div className="">
                            <h1 className="flex justify-center text-white font-bold text-2xl lg:ml-4">Java Agro Globalindo</h1>
                        </div>
                        <div className="box-footer lg:ml-16 xl:ml-56 2xl:ml-80">
                            <div className="information-page md:text-sm lg:text-base mb-4">
                                <button href="" className="">Karir</button>
                                <span className="px-5">|</span>
                                <button href="">Kebijakan Privasi</button>
                                <span className="px-5">|</span>
                                <button href="">Syarat dan Ketentuan</button>
                            </div>
                            <div className="copyright">
                                <p>Copyright ©2021 Java Agro Globalindo Inc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default footer;