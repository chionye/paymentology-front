import BannerImg from "../assets/PaymentologyImg.png";

const Banner = () => {
    const style = {
        background: "#0f1f38"
    }
    return(
        <div style={style}>
            <img src={BannerImg} alt="Banner" />
        </div>        
    )
}

export default Banner;