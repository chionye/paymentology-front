const Button = (props) => {

    return <button className={`${props.width} bg-blue-500 hover:bg-blue-700 py-1 h-8 px-2 text-sm text-white md:text-base`}>{props.label}</button>
}

export default Button;