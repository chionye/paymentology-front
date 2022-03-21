const InputFile = () => {
    return(
        <div className="flex flex-row w-full md:w-1/2 items-center text-sm my-2 px-4">
            <label className="w-28">Select file 1</label>
            
            <input type="file" 
                className="block w-full mx-3 appearance-none border border-1 border-gray-300 py-1 px-2  text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100 file:text-red-600
                "/>
            
            <button className="ml-1 bg-sky-600 hover:bg-sky-700 py-1 px-2 ">Browse...</button>
        </div>
    )
}

export default InputFile;