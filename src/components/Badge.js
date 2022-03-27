const Badge = (props) => {
    return(
        <div className={`text-xs bg-white ${props.color} font-semibold ${props.display}`}>{props.data}</div>
    )
}

export default Badge;