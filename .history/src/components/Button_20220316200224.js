const Button = (props) => {

    return <button className={`${props.width} bg-blue-500 hover:bg-blue-700 py-3 px-4 text-sm text-white font-semi`}>{props.label}</button>
}

export default Button;