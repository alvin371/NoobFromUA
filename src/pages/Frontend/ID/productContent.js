import Header from './headerProducts'
import Footer from './footer'
import Main from './product'
import { useEffect } from 'react'
import { useState } from 'react'


import ClipLoader from "react-spinners/HashLoader"



const Load = (loading) => {
    return (
        <div className="flex justify-center text-center mt-80">
            <ClipLoader size={150} color={"#D0021B"} loading={loading} />
        </div>
    )
}
const Product = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return (
        <div>
            {loading ? <Load loading={loading} /> : <Page />}

        </div>
    );
}

const Page = () => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Product;