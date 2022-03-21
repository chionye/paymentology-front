import Button from "./Button";
const InputFile = (props) => {
    return(
        <div className="flex flex-col md:flex-row w-full md:w-3/4 md:items-center text-sm md:text-base tracking-wider my-2 md:px-4">
            <label className="w-28">{props.file}</label>
            <div className="border w-full">
            <input type="file" 
                    className="block w-full mr-2 md:mx-3 appearance-none  px-2  text-slate-500
                    file:py-2 file:px-4
                    file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-500 file:text-violet-700
                    hover:file:bg-blue-700 file:text-white
                "/>
            </div>
            
        </div>
    )
}

export default InputFile;