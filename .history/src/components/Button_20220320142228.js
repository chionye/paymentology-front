const Button = (props) => {

    return <button className={`${props.width} bg-red hover:bg-blue-700 py-3 px-7 text-sm ${props.textColor} font-semibold`} disabled={true}>{props.label}</button>
}

export default Button;