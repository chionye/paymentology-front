const Button = (props) => {

    return <button className={`${props.width} bg-red hover:bg-red-600 py-3 px-5 text-sm text-white font-semibold`} disabled={true}>{props.label}</button>
}

export default Button;