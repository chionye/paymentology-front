const FileReport = (props) => {
    return(
        <table className="w-full table-auto border-collapse border-gray-300 text-sm">
            <thead>
                <tr className="text-left">
                    <th className="font-semibold  border border-gray-300 px-2 py-1" colSpan={3} >{props.fileName}</th>
                </tr>
                <tr className="text-left text-gray">
                    <th className="border border-gray-300 px-2 py-1">Date</th>
                    <th className="border border-gray-300 px-2 py-1">Reference</th>
                    <th className="border border-gray-300 px-2 py-1">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr className='odd:bg-white even:bg-gray-light hover:bg-white hover:text-blue hover:font-medium'>
                    <td className="border border-gray-300 px-2 py-1">{props.date}</td>
                    <td className="border border-gray-300 px-2 py-1">{props.reference}</td>
                    <td className="border border-gray-300 px-2 py-1">{props.amount}</td>
                </tr>
            </tbody>
        </table> 
    )
}

export default FileReport;