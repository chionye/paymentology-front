import Button from "./Button";
const InputFile = (props) => {
    return(
        <div className="flex flex-row w-full md:w-3/4 items-center text-sm my-2 px-4">
            <label className="w-28">{props.file}</label>
            <div>

            </div>
            
        </div>
    )
}

export default InputFile;