import Button from "./Button";
const InputFile = (props) => {
    return(
        <div className="flex flex-col md:flex-row w-full md:w-3/4 md:items-center text-sm md:text-base tracking-wider my-2 md:px-4">
            <label className="w-28">{props.file}</label>
            <div className="flex flex-row items-center w-full">
                <div>

                </div>
                
                
                <Button label={"Browse..."} />
            </div>
            
        </div>
    )
}

export default InputFile;