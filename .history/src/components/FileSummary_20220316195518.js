const FileSummary = (props) => {
    return(
        <div className="shadow text-sm md:text-base p-3 my-3 w-full md:w-1/2  max-w-lg tracking-wider ">
            <div className="font-medium text-xl">{props.fileName}</div>
            <div className="flex flex-row justify-between my-1">
                <span>Total Records</span>
                <span>{props.totalRecords}</span>
            </div>
            <div className="flex flex-row justify-between my-1 text-green-500">
                <span>Matching Records</span>
                <span>{props.matchingRecords}</span>
            </div>
            <div className="flex flex-row justify-between my-1 text-red-500">
                <span>Unmatched Records</span>
                <span>{props.unmatchedRecord}</span>
            </div>
        </div>
    )
}

export default FileSummary;