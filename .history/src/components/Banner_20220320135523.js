import BannerImg from "../assets/PaymentologyImg.png";
import Logo from "../assets/PaymentologyLogo.png"
import Container from "./Container";
import Button from "./Button";
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
                        <h1 className="text-7xl mt-2 text-blue-500">Reconciliation </h1>
                        {/* <div className="w-4/6 h-1 bg-white"></div> */}
                        <h2 className="text-5xl mt-3">App</h2>
                        <div className="mt-5">
                            <Button label="Get Started" />
                        </div>
                        
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