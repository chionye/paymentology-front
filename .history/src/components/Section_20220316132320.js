import Button from "./Button";
import InputFile from "./InputFile";

const Section = () => {
    return(
        <div className="relative w-5/6 h-auto p-3 border border-1 border-gray mx-auto my-10">
            <div className="absolute -top-3 left-5 bg-white px-2">Specify files to compare</div>
            <InputFile file={"Select file 1"} />
            <div className="flex flex-row">
            <InputFile file={"Select file 2"} />
            <Button label={"Compare"}
            </div>
            
        </div>
    )
}

export default Section;