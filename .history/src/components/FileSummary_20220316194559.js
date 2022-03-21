const FileSummary = (props) => {
    return(
        <div className="shadow text-sm md:text-base p-3 my-3 w-full md:w-1/2  max-w-lg tracking-wider ">
            <div className="font-medium text-xl">{props.fileName}</div>
            <div className="flex flex-row justify-between my-1">
                <span>Total Records</span>
                <span>{props.}</span>
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