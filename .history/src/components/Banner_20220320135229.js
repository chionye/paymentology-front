import BannerImg from "../assets/PaymentologyImg.png";
import Logo from "../assets/PaymentologyLogo.png"
import Container from "./Container";
const Banner = () => {
    const style = {
        background: "#0f1f38"
    }
    return(
        <div style={style} >
            <Container>
                <div className="w-5/6 mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="w-1/2 text-white  font-bold">
                        <img className="" src={Logo}  alt="Paymentology Logo"/>
                        <h1 className="text-7xl my-2 text-blue-500">Reconciliation </h1>
                        <div className="w-4"></div>
                        <h2 className="text-5xl">App</h2>
                    </div>
                    <div className="w-1/2 ">
                        <img src={BannerImg} alt="Banner" />
                    </div>
                </div>
            
            </Container>
            
            
            
        </div>        
    )
}

export default Banner;