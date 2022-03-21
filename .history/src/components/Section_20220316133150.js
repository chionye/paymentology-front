
const Section = (props, ...rest) => {
    return(
        <div className="relative w-4/6 h-auto p-3 border border-1 border-gray mx-auto my-10">
            <div className="absolute -top-3 left-5 bg-white px-2">{props.title}</div>
        </div>
    )
}

export default Section;