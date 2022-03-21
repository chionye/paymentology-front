const Button = (props) => {

    return <button className={`${props.width} bg-blue-500 hover:bg-blue-700 py- h-12 px-4 text-sm text-white md:text-base`}>{props.label}</button>
}

export default Button;