const FileSummary = () => {
    return(
        <div className="shadow-sm text-sm md:text-m p-3 my-3 md:my-1 w-full md:w-1/2 max-w-sm">
            <div className="font-medium text-xl">file1.csv</div>
            <div className="flex flex-row justify-between my-1">
                <span>Total Records</span>
                <span>450</span>
            </div>
            <div className="flex flex-row justify-between my-1">
                <span>Matching Records</span>
                <span>442</span>
            </div>
            <div className="flex flex-row justify-between my-1">
                <span>Unmatched Records</span>
                <span>8</span>
            </div>
        </div>
    )
}

export default FileSummary;