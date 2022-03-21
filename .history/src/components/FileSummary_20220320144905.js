const FileSummary = (props) => {
    return(
        <div className="shadow-sm bg-white text-sm md:text-base py-5 px-3 my-3 w-full md:w-1/2  max-w-lg tracking-wider ">
            <div className="font-semibold text-xl">{props.fileName}</div>
            <div className="flex flex-row justify-between my-1">
                <span>Total Records</span>
                <span>{props.totalRecords}</span>
            </div>
            <div className="flex flex-row justify-between my-1 text-green">
                <span>Matching Records</span>
                <span>{props.matchingRecords}</span>
            </div>
            <div className="flex flex-row justify-between my-1 text-red">
                <span>Unmatched Records</span>
                <span>{props.unmatchedRecords}</span>
            </div>
        </div>
    )
}

export default FileSummary;