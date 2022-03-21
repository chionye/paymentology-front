
const Section = (props) => {
    return(
        <div className="relative md:w-5/6  h-auto p-3 border border-1 border-gray mx-auto my-5 tracking-wider">
            <div className="absolute font-medium -top-3 left-1 md:left-5 bg-white  text-blue px-2">{props.title}</div>
            {props.children}
        </div>
    )
}

export default Section;