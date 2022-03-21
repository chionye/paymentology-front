const FileSummary = () => {
    return(
        <div className="shadow p-3 my-1 min-w-md">
            <div className="font-medium">file1.csv</div>
            <div className="flex flex-row justify-between">
                <span>Total Records</span>
                <span>450</span>
            </div>
            <div>
                <span>Matching Records</span>
                <span>442</span>
            </div>
            <div>
                <span>Unmatched Records</span>
                <span>8</span>
            </div>
        </div>
    )
}

export default FileSummary;