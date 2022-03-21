import { useState } from "react";

const InputFile = (props) => {
    const [file, setFile] = useState();

    const saveFile = e => {
        setFile({
            file: e.target.files[0],
            fileName: e.target.file
        })
    }
    return(
        <div className="flex flex-col md:flex-row w-full md:w-3/4 md:items-center text-sm md:text-base tracking-wider my-2 md:px-4">
            <label className="w-28">{props.file}</label>
            <div className="w-full border border-1 border-gray-300 py-2 relative">
            <input type="file" 
                    className="block
                    w-full 
                    pl-2
                    md:mx-3 
                    appearance-none   
                    text-slate-500
                    file:py-2 
                    file:px-4
                    file:border-0
                    file:text-sm 
                    file:font-semibold
                    file:bg-blue-500 
                    hover:file:bg-blue-700 
                    file:text-white"
                    onChange={""}
                />
                <div className="absolute bg-blue-500 text-white px-4 py-2 right-0 top-0">Browse...</div>
            </div>
            
        </div>
    )
}

export default InputFile;