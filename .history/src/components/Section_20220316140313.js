
const Section = (props) => {
    return(
        <div className="relative md:w-4/6 lg: h-auto p-3 border border-1 border-gray mx-auto my-5 tracking-wider">
            <div className="absolute -top-3 left-1 md:left-5 bg-white px-2">{props.title}</div>
            {props.children}
        </div>
    )
}

export default Section;