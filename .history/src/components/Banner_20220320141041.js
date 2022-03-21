import BannerImg from "../assets/PaymentologyImg.png";
import Logo from "../assets/PaymentologyLogo.png"
import Container from "./Container";
import Button from "./Button";
const Banner = () => {
    const style = {
        background: "#0f1f38"
    }
    const red = {
        color: "#f47a71"
    }
    return(
        <div style={style} className="py-5">
            <Container>
                <div className="w-5/6 mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center">
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-white text-center md:text-left font-bold">
                        <img className="" src={Logo}  alt="Paymentology Logo"/>
                        <h1 className={"text-4xl md:text-7xl mt-2 text-blue-500"}>Reconciliation 
                        
                        <span className="text-white"> App</span></h1>
                        
                        
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