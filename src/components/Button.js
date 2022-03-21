const Button = (props) => {

    return <button className={`${props.width} bg-red hover:bg-red-700 py-3 px-5 text-sm text-white font-semibold`} disabled={props.stat} onClick={props.handleForm}>{props.label}</button>
}

export default Button;