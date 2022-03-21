const InputFile = () => {
    return(
        <div>
            <label>Select file 1</label>
            <input type="file" 
                className="block w-full flex text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100
                "/>
        </div>
    )
}

export default InputFile;