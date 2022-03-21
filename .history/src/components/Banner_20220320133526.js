import BannerImg from "../assets/PaymentologyImg.png";

const Banner = () => {
    const style = {
        background: "#0f1f38"
    }
    return(
        <div style={style} className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
                
            </div>
            <img src={BannerImg} alt="Banner" />
        </div>        
    )
}

export default Banner;