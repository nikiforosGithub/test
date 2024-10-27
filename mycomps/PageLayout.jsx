import Header from "@/mycomps/Header";
import Footer from "@/mycomps/Footer";



export default function PageLayout({ children }) {


    return (
        <div className='mt-24 min-h-screen'>
            <Header/>
            <div className='min-h-screen container mx-auto px-8 max-sm:px-2'>
                {children}
            </div>
            <Footer/>
        </div>
    )
}