import sun from './../../../assets/img/part/Sun.png'

import Modals from './productModals'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
// import { useEffect } from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { motion } from 'framer-motion'


const Product = () => {
    const [data, setData] = useState([])
    const [high, setHigh] = useState([])
    const [filter, setFilter] = useState(data)
    const products = async () => {
        try {
            const res = await axios.get('https://staging.javaagroglobalindo.com/products', {
                withCredentials: false,
            })
            setData(res.data.data)
            setFilter(res.data.data)

        } catch (err) {
            console.log(err.message)
        }
    }
    const highlights = async () => {
        try {
            const resp = await axios.get('https://staging.javaagroglobalindo.com/highlights', {
                withCredentials: false,
            })
            setHigh(resp.data.data)
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        products();
        highlights();
    }, [])
    // const card = data.map( ( data, index ) => {
    //     return (
    //         <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
    //             <button onClick={() => setModal( true )}>
    //                 <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    //             </button>
    //             <div className="p-5">
    //                 <p className="inline-flex cursor-pointer" onClick={() => setModal( true )}>
    //                     <h5 className="text-gray-900 font-bold text-xl sm:text-2xl tracking-tight mb-2">{data.title}</h5>
    //                 </p>
    //                 <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of
    //                     2021 so far, in reverse chronological order.</p>
    //                 <button className="mr-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" onClick={() => setModal( true )}>
    //                     <i className="fab fa-whatsapp mr-2"></i>  Call Us
    //                 </button>
    //                 <button className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" onClick={() => setModal( true )}>
    //                     Read more
    //                 </button>
    //             </div>
    //         </div>
    //     )
    // } )
    const [modal, setModal] = useState(false)
    const [tempData, setTempData] = useState([])
    const getData = (img, name, desc) => {
        let tempData = [img, name, desc]
        setTempData(item => [1, ...tempData])
        return setModal(true)
    }

    const result = [...new Set(data.flatMap(({ category }) => category))].sort();

    const allCategories = ['All', ...data.map(item => item.category)]
    const filteResult = (item) => {
        const hasil = data.filter((curdata) => curdata.category === item)
        setFilter(hasil)
    }
    return (

        <div className="pt-24 w-screen overflow-x-hidden">
            <div className="container px-6 py-2 mx-auto">
                <div className="items-center lg:flex">
                    <Splide options={{
                        rewind: true,
                        gap: '1rem',
                        arrows: 'slider',
                        autoplay: true,
                    }}>
                        {high.map((datas, index) => (
                            <SplideSlide key={index}>
                                <div className="splide__progress">
                                    <div className="splide__progress__bar"></div>
                                </div>
                                <div className="navbar">
                                    <div className="invisible sm:visible sm:w-2/5 md:w-4/12 lg:w-3/5 sm:max-w-sm lg:max-w-lg text-left absolute left-10 top-16 lg:left-32 lg:top-48 bg-gray-50 bg-opacity-90 shadow-lg p-5 rounded-lg">
                                        <h1 className="w-4/5 font-bold text-blue-800 uppercase dark:text-white lg:text-3xl sm:text-lg md:text-xl"><span
                                            className="text-yellow-500">{datas.title_id}</span></h1>
                                        <p className="mt-2 sm:text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-400">{datas.description_id}</p>
                                        <button
                                            className="w-full px-8 py-4 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-yellow-500 rounded-full lg:w-auto hover:bg-yellow-500 focus:outline-none focus:bg-indigo-500">
                                            Shop Now</button>
                                    </div>
                                    <div className="flex justify-center mx-auto">
                                        <img src={datas.image} alt="" />
                                        {/* <video className="aligns-center w-full h-auto" autoPlay={true} muted loop>
                                        <source src={slider1} type="video/mp4" />
                                    </video> */}
                                    </div>
                                </div>
                            </SplideSlide>

                        ))}
                    </Splide>
                </div>
            </div>
            {/* BreadCrumb */}
            <section className="container mx-auto mt-12 mb-12 ml-8 sm:ml-4 md:ml-12 lg:ml-12 xl:ml-20 2xl:ml-52">
                <h1 className="font-bold text-2xl text-yellow-400"><Link to="/" className="no-underline mr-5">Home</Link>/<span className="text-blue-900 ml-5">Our Product</span></h1>
                <hr className="w-2/12" />
            </section>
            {/* button */}
            <div className="flex justify-center">
                <button
                    className="w-44 px-8 py-4 mt-6 mx-2 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-yellow-500 rounded-full lg:w-auto hover:bg-yellow-500 focus:outline-none focus:bg-indigo-500" onClick={() => setFilter(data)}>
                    All Category</button>
                {result.map((datas, index) => (
                    <button
                        className="w-44 px-8 py-4 mt-6 mx-2 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-yellow-500 rounded-full lg:w-auto hover:bg-yellow-500 focus:outline-none focus:bg-indigo-500" key={index} onClick={() => filteResult(datas)}>
                        {datas}</button>
                ))}
            </div>

            {/* Product Quality */}
            <section className="container mx-auto flex justify-center lg:justify-evenly mt-24 mb-12">
                <div className="grid grid-flow-row grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 m-5">
                    {/* {card} */}
                    {filter.map((datas, index) => (
                        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5" key={index}>
                            {/* <button onClick={() => setModal(true)}> */}
                            <img className="rounded-t-lg" src={datas.image} alt="" />
                            {/* </button> */}
                            <div className="p-5">
                                {/* <p className="inline-flex cursor-pointer" onClick={() => setModal(true)}> */}
                                <h5 className="text-gray-900 font-bold text-xl sm:text-2xl tracking-tight mb-2">{datas.name_id}</h5>
                                {/* </p> */}
                                <p className="font-normal text-gray-700 mb-3"> {datas.description_id}
                                </p>
                                <div className="px-6 pt-4 pb-2">
                                    {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">master box included</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">customized</span> */}
                                </div>
                                <button className="mr-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"><a href="https://web.whatsapp.com/send?phone=6281216610559&text=Helo Java Agro Globalindo, I'm interested in your product ..">
                                    <i className="fab fa-whatsapp mr-2"></i>  Call Us</a>
                                </button>
                                <button className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" onClick={() => getData(datas.image, datas.name_id, datas.description_id)}>
                                    Read more
                                </button>

                                <Modals open={modal} onClose={() => setModal(false)} img={tempData[1]} name={tempData[2]} desc={tempData[3]} >
                                    {datas.id}
                                </Modals>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Title Quality */}
            <section className="container mx-auto mt-12 mb-12">
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-2xl text-center">Briket Kualitas Premium</h1>
                    <p className="text-base font-normal text-center">Kami fokus membangun bricket kualitas premium dengan harga lebih murah
                    </p>
                </div>
            </section>
            {/* Card Quality */}
            <section className="container mx-auto mt-12 mb-12">
                <div className="grid grid-flow-row grid-cols-2 md:grid-cols-6 gap-4 mx-3">
                    <div className="col-span-2 flex border-box border-2 rounded-lg shadow-md border-blue-600 border-opacity-10 p-5">
                        <div className="w-1/4">
                            <img src={sun} alt="" />
                        </div>
                        <div className="w-3/4">
                            <h1 className="font-extrabold text-blue-800 text-xl">Lorem Ipsum</h1>
                            <p className="font-medium text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse et urna </p>
                        </div>
                    </div>
                    <div className="col-span-2 flex border-box border-2 rounded-lg shadow-md border-blue-600 border-opacity-10 p-5">
                        <div className="w-1/4">
                            <img src={sun} alt="" />
                        </div>
                        <div className="w-3/4">
                            <h1 className="font-extrabold text-blue-800 text-xl">Lorem Ipsum</h1>
                            <p className="font-medium text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse et urna </p>
                        </div>
                    </div>
                    <div className="col-span-2 flex border-box border-2 rounded-lg shadow-md border-blue-600 border-opacity-10 p-5">
                        <div className="w-1/4">
                            <img src={sun} alt="" />
                        </div>
                        <div className="w-3/4">
                            <h1 className="font-extrabold text-blue-800 text-xl">Lorem Ipsum</h1>
                            <p className="font-medium text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse et urna </p>
                        </div>
                    </div>
                    <div className="md:col-start-2 col-span-2 flex border-box border-2 rounded-lg shadow-md border-blue-600 border-opacity-10 p-5">
                        <div className="w-1/4">
                            <img src={sun} alt="" />
                        </div>
                        <div className="w-3/4">
                            <h1 className="font-extrabold text-blue-800 text-xl">Lorem Ipsum</h1>
                            <p className="font-medium text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse et urna </p>
                        </div>
                    </div>
                    <div className=" col-span-2 md:col-span-2 flex border-box border-2 rounded-lg shadow-md border-blue-600 border-opacity-10 p-5">
                        <div className="w-1/4">
                            <img src={sun} alt="" />
                        </div>
                        <div className="w-3/4">
                            <h1 className="font-extrabold text-blue-800 text-xl">Lorem Ipsum</h1>
                            <p className="font-medium text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse et urna </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact */}
            <section className="container mx-auto mt-10">
                <div className="grid grid-cols-1 lg:flex lg:justify-start lg:mr-24 mr-0">
                    <div className="text-center w-full lg:w-7/12 lg:mx-0 xl:mx-8 ">
                        <h1 className=" text-2xl font-bold">PT. JAVA AGRO GLOBALINDO</h1>
                        <p className="mt-6 m-2">Kami juga terus mengupdate informasi mengenai perusahaan melalui media sosial, untuk informasi terbaru anda dapat mengikuti media sosial kami.  </p>
                        <div className="text-xs sm:text-base flex justify-evenly mt-10 mx-3 ">
                            <a href="https://web.whatsapp.com/send?phone=6281216610559&text=Helo Java Agro Global Indo, I'm interested in your product .." className="rounded-full bg-green-500 font-bold text-white w-16 h-5  sm:w-24  sm:h-5 md:w-32 md:p-3 md:h-10 lg:w-36 lg:p-2 lg:flex lg:justify-center lg:h-10 "><i className="fab pt-1 fa-whatsapp text-white mr-1 sm:mr-3" />
                                <span className='hidden md:block lg:block xl:block 2xl:block'>Whatsapp</span></a>
                            <a href=" " className="rounded-full bg-pink-500 font-bold text-white w-16 h-5  sm:w-24  sm:h-5 md:w-32 md:p-3 md:h-10 lg:w-36 lg:p-2 lg:flex lg:justify-center lg:h-10 "><i className="fab pt-1 fa-instagram text-white mr-1 sm:mr-3" />
                                <span className='hidden md:block lg:block xl:block 2xl:block'>Instagram</span></a>
                            <a href=" " className="rounded-full bg-blue-500 font-bold text-white w-16 h-5  sm:w-24  sm:h-5 md:w-32 md:p-3 md:h-10 lg:w-36 lg:p-2 lg:flex lg:justify-center lg:h-10 "><i className="fab pt-1 fa-facebook mr-1 sm:mr-3" />
                                <span className='hidden md:block lg:block xl:block 2xl:block'> Facebook </span></a>
                            <a href=" " className="rounded-full bg-red-500 font-bold text-white w-16 h-5  sm:w-24  sm:h-5 md:w-32 md:p-3 md:h-10 lg:w-36 lg:p-2 lg:flex lg:justify-center lg:h-10 "><i className="fab pt-1 fa-youtube mr-1 sm:mr-3" />
                                <span className='hidden md:block lg:block xl:block 2xl:block'>Youtube</span> </a>
                            <a href=" " className="rounded-full bg-gray-700 font-bold text-white w-16 h-5  sm:w-24  sm:h-5 md:w-32 md:p-3 md:h-10 lg:w-36 lg:p-2 lg:flex lg:justify-center lg:h-10 "><i className="fab pt-1 fa-tiktok mr-1 sm:mr-3" />
                                <span className='hidden md:block lg:block xl:block 2xl:block'>Tiktok</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex lg:justify-center justify-center w-full lg:w-5/12 pt-8">
                        <table className="border-0 text-left text-xs sm:text-base">
                            <tbody><tr>
                                <td className="px-4">Kantor Pusat</td>
                                <td className="px-4">: Pasuruan - Jawa Timur</td>
                            </tr>
                                <tr>
                                    <td className="px-4">Kantor Cabang</td>
                                    <td className="px-4">: Pasuruan Indonesia</td>
                                </tr>
                                <tr>
                                    <td className="px-4">Telp</td>
                                    <td className="px-4">:+62 812-1661-0559</td>
                                </tr>
                                <tr>
                                    <td className="px-4">Email</td>
                                    <td className="px-4">: ptjavaagroglobalindo@gmail.com</td>
                                </tr>
                            </tbody></table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product