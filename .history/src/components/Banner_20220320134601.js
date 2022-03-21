import BannerImg from "../assets/PaymentologyImg.png";
import Logo from "../assets"
import Container from "./Container";
const Banner = () => {
    const style = {
        background: "#0f1f38"
    }
    return(
        <div style={style} >
            <Container>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="w-1/2 text-white text-7xl font-bold text-right">
                        <h1>Reconciliation</h1>
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