import BannerImg from "../assets/PaymentologyImg.png";
import Con
const Banner = () => {
    const style = {
        background: "#0f1f38"
    }
    return(
        <div style={style} className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="w-1/2 text-white text-4xl font-bold text-right">
                <h1>Reconciliation</h1>
            </div>
            <div className="w-1/2 ">
            <img src={BannerImg} alt="Banner" />
            </div>
            
        </div>        
    )
}

export default Banner;