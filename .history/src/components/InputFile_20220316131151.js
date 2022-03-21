const InputFile = () => {
    return(
        <div className="flex flex-row w-full items-center text-sm my-2 px-4">
            <label className="mr-1 w-32">Select file 1</label>
            
            <input type="file" 
                className="block w-full x-3 appearance-none  text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100 file:text-red-600
                "/>
            
            <button>Bro</button>
        </div>
    )
}

export default InputFile;