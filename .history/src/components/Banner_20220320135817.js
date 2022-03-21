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
                        <h1 className="text-4xl md:text-7xl mt-2 text-blue-500">Reconciliation 
                        <br />
                        <span className="text-white">App</span></h1>
                        
                        
                        <div className="mt-5">
                            <Button label="Get Started" />
                        </div>
                        
                    </div>
                    <div className="w-1/2 hidden md:block">
                        <img src={BannerImg} alt="Banner" />
                    </div>
                </div>
            
            </Container>
            
            
            
        </div>        
    )
}

export default Banner;