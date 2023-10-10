import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function HomeLayout({children}) {
    return (
        <>
            <div >
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer/>
            </div>
        </>

    )
}
export default HomeLayout