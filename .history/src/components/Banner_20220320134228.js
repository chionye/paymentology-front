import BannerImg from "../assets/PaymentologyImg.png";
import Container from "./Container";
const Banner = () => {
    const style = {
        background: "#0f1f38"
    }
    return(
        <div style={style} >
            <Container>
                <div className=""></div>
            <div className="w-1/2 text-white text-4xl font-bold text-right">
                <h1>Reconciliation</h1>
            </div>
            <div className="w-1/2 ">
                <img src={BannerImg} alt="Banner" />
            </div>
            </Container>
            
            
            
        </div>        
    )
}

export default Banner;