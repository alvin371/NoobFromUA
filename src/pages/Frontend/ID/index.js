import card1 from './../../../assets/img/part/card-icon.png'
import card2 from './../../../assets/img/part/card-icon2.png'
import card3 from './../../../assets/img/part/card-icon3.png'
import owner from './../../../assets/img/part/owner-photo.png'
import bluereact from './../../../assets/img/part/blue-rect.png'
import yellowreact from './../../../assets/img/part/yellow-rect.png'
import ellipse from './../../../assets/img/part/ellipse.png'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

const Index = () => {
    const [data, setData] = useState([])
    const [high, setHigh] = useState([])
    const products = async () => {
        try {
            const res = await axios.get('https://staging.javaagroglobalindo.com/products', {
                withCredentials: false,
            })
            console.log(res.data)
            setData(res.data.data)
        } catch (err) {
            console.log(err.message)
        }
    }
    const highlights = async () => {
        try {
            const resp = await axios.get('https://staging.javaagroglobalindo.com/highlights', {
                withCredentials: false,
            })
            console.log(resp.data)
            setHigh(resp.data.data)
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        products();
        highlights()
    }, [])
    return (
        <div className="w-screen overflow-x-hidden lg:pt-64 2xl:pt-8">
            <div className="container px-6 py-16 mx-auto ">
                <div className="items-center lg:flex">
                    <Splide options={{
                        rewind: true,
                        gap: '1rem',
                        arrows: 'slider',
                        autoplay: true,
                        type: 'loop',

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

            {/* Greetings */}
            <section className="container mx-auto my-4">
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-center text-3xl text-blue-900">Semua Jenis Komoditas  <span className="text-yellow-500">dengan Kualitas Premium</span></h1>
                    <p className="font-regular text-xl text-center mx-auto w-4/5 sm:w-3/6">Kualitas Produk : Komoditi Premium, Komoditas Medium, Komoditi Standar</p>
                </div>
            </section>
            {/* Card */}
            <section className="container mx-auto flex justify-center mt-24 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="card w-72 h-36 text-center box-border shadow-lg rounded-lg relative">
                        <img src={card1} alt="" className="absolute card-icon" />
                        <h1 className="font-semibold text-blue-800 pt-16 pb-3 text-xl">Kemudahan Pembayaran</h1>
                        {/* <p className="text-based font-regular">Simple and secure control of your organization’s financial and legal
                            transactions. Send customized invoices and contracts</p> */}
                    </div>
                    <div className="card w-72 h-36 text-center box-border shadow-lg rounded-lg relative">
                        <img src={card2} alt="" className="absolute card-icon" />
                        <h1 className="font-semibold text-blue-800 pt-16 pb-3 text-xl">Pengiriman Tepat Waktu</h1>
                        {/* <p className="text-based font-regular">Simple and secure control of your organization’s financial and legal
                            transactions. Send customized invoices and contracts</p> */}
                    </div>
                    <div className="card w-72 h-36 text-center box-border shadow-lg rounded-lg relative">
                        <img src={card3} alt="" className="absolute card-icon" />
                        <h1 className="font-semibold text-blue-800 pt-16 pb-3 text-xl">Produk Bergaransi</h1>
                        {/* <p className="text-based font-regular">Simple and secure control of your organization’s financial and legal
                            transactions. Send customized invoices and contracts</p> */}
                    </div>
                </div>
            </section>
            {/* Testimonial on pc*/}
            <section className="container mx-auto mt-24 mb-12 hidden md:block">
                <div className="flex flex-col">
                    {/* testimonial phrase */}
                    <div className="flex flex-row justify-end mr-16">
                        <h1 className="text-base font-medium text-blue-800 flex justify-end">Produk</h1>
                        <hr className="w-1/12 font-bold mt-3 mx-5" />
                    </div>
                    {/* what they say */}
                    <div className="flex justify-end mr-16">
                        <h1 className="text-3xl sm:text-4xl text-blue-800 font-bold">Produk unggulan yang kami miliki</h1>
                    </div>
                    {/* box */}
                    <Splide options={{
                        perPage: 3,
                        drag: 'free',
                        rewind: true,
                        gap: '1rem',

                    }} hasSliderWrapper
                        hasAutoplayProgress>
                        {data.map((datas, index) => (
                            <SplideSlide key={index}>
                                <div className="flex justify-center lg:p-16 p-0 mt-8 ">
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                        <img className="w-full" src={datas.image} alt="Sunset in the mountains" />
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2">{datas.name_id}</div>
                                            <p className="text-gray-700 text-base">
                                                {datas.description_id}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </section>
            {/* Testimonial on mobile*/}
            <section className="container mx-auto mt-24 mb-12 md:hidden">
                <div className="flex flex-col">
                    {/* testimonial phrase */}
                    <div className="flex flex-row justify-end mr-16">
                        <h1 className="text-base font-medium text-blue-800 flex justify-end">Produk</h1>
                        <hr className="w-1/12 font-bold mt-3 mx-5" />
                    </div>
                    {/* what they say */}
                    <div className="flex justify-end mr-16">
                        <h1 className="text-3xl sm:text-4xl text-blue-800 font-bold">Produk unggulan yang kami miliki</h1>
                    </div>
                    {/* box */}
                    <Splide options={{
                        perPage: 1,
                        drag: 'free',
                        rewind: true,
                        gap: '1rem',

                    }} hasSliderWrapper
                        hasAutoplayProgress>
                        {data.map((datas, index) => (
                            <SplideSlide key={index}>
                                <div className="flex justify-center lg:p-16 p-0 mt-8 ">
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                        <img className="w-full" src={datas.image} alt="Sunset in the mountains" />
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2">{datas.name_id}</div>
                                            <p className="text-gray-700 text-base">
                                                {datas.description_id}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </section>
            {/* VideoPlayer */}
            <section className="container mx-auto mt-28">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className="relative w-full text-left ml-14">
                        <img src={ellipse} alt="" className="absolute part-vid-capt" />
                        <h1 className="font-bold text-3xl text-blue-900 w-3/5 z-10">
                            Komoditas Premium Indonesia<span className="text-yellow-500">, Fokus di kualitas produksi</span>
                        </h1>
                        <p className="font-regular text-lg text-gray-900 mt-5 w-4/5">Kami bermitra dengan supplier komoditas dari seluruh Indonesia, dengan system quality control terbaik.</p>
                    </div>
                    <div className="relative ml-4 xl:ml-52 lg:mt-0 mt-20">
                        {/* video youtube */}
                        <img src={bluereact} alt="" className="absolute vid-backg" />
                        <iframe width={560} height={315} className="w-11/12 sm:h-80 h-64"
                            // only add src youtube
                            title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        <img src={yellowreact} alt="" className="ml-80 absolute vid-backg-sec" />
                    </div>
                </div>
            </section>
            {/* Owner Said */}
            <section className="container mx-auto mt-24 mb-12">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2">
                    <div className="w-5/6 py-24 ml-14 text-left">
                        <h1 className="text-blue-900 font-bold text-3xl w-3/5 leading-normal"><span className="text-yellow-500">Komitmen</span> untuk memberikan Produk Kualitas Terbaik</h1>
                        <p className="font-regular text-lg mt-5">Mengawasi setiap tahap proses produksi, menjaga proses produksi untuk hasil dengan kualitas terbaik</p>
                    </div>
                    <div className="w-5/6 flex justify-end mr-10">
                        <img src={owner} alt="" className="w-3/4 lg:w-auto xl:w-3/4 h-auto" />
                    </div>
                </div>
            </section>

            {/* Reach Us */}
            <section className="container mx-auto mt-24 mb-12">
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-3xl text-blue-800 text-center">Hubungi Kami disini!</h1>
                    <p className="text-base font-light text-center">Dengan Mengirimkan email Anda di sini, kami dapat mengirimkan katalog kami kepada Anda!</p>
                    <div className="flex flex-row justify-center mt-6">
                        <input type="text" placeholder="Write down your email here!" className="border-blue-800 border-2 border-opacity-25 rounded-full py-2 px-2 w-3/12 mr-5" />
                        <button className="bg-blue-800 rounded-full px-5 py-2 text-white font-semibold w-32">Submit</button>
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
        </div >
    )
}

export default Index