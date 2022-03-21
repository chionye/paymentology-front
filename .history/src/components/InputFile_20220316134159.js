import Button from "./Button";
const InputFile = (props) => {
    return(
        <div className="flex flex-col md:flex-row w-full md:w-3/4 md:items-center text-sm my-2 md:px-4">
            <label className="w-28">{props.file}</label>
            <div className="flex flex-row items-center w-full">
                <input type="file" 
                    className="block w-full md:mx-3 appearance-none border border-1 border-gray-300 p-2  text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100 file:text-red-600
                    "/>
                
                <Button label={"Browse..."} />
            </div>
            
        </div>
    )
}

export default InputFile;