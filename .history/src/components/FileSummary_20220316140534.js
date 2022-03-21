const FileSummary = () => {
    return(
        <div className="shadow-sm text-sm md:text-base p-3 my-3 md:my-3 w-full md:w-1/2 max-w-md tracking-wider border border-1 border-gray-300">
            <div className="font-medium text-xl">file1.csv</div>
            <div className="flex flex-row justify-between my-1">
                <span>Total Records</span>
                <span>450</span>
            </div>
            <div className="flex flex-row justify-between my-1 text-green-500">
                <span>Matching Records</span>
                <span>442</span>
            </div>
            <div className="flex flex-row justify-between my-1 text-red-500">
                <span>Unmatched Records</span>
                <span>8</span>
            </div>
        </div>
    )
}

export default FileSummary;