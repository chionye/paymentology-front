import BannerImg from "../assets/PaymentologyImg.png";
import Logo from "../assets/PaymentologyLogo.png"
import Button from "./Button";
const Banner = () => {
    
    return(
        <div className="py-5 bg-blue">
            <div className="w-5/6 mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center tracking-wider">
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-white text-center md:text-left font-bold">
                    <img src={Logo}  alt="Paymentology Logo"/>
                    <h1 className={`text-3xl md:text-7xl mt-2 text-red`} >Reconciliation 
                    
                    <span className="text-white"> App</span></h1>
                    
                    
                    <div className="mt-5">
                        <Button 
                        bg={"bg-red"}
                        textColor={"text-white"} 
                        label="Get Started" />
                    </div>
                    
                </div>
                <div className="w-1/2 hidden md:block">
                    <img src={BannerImg} alt="Banner" />
                </div>
            </div>
        </div>        
    )
}

export default Banner;