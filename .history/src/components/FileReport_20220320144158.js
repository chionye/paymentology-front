const FileReport = (props) => {
    return(
        <table className="w-full border-collapse border-gray-300 text-sm">
            <thead>
                <tr className="text-left">
                    <th className="font-medium text-base border border-gray-300" colSpan={3} >{props.fileName}</th>
                </tr>
                <tr className="text-left text-gray">
                    <th className="border border-gray-300">Date</th>
                    <th className="border border-gray-300">Reference</th>
                    <th className="border border-gray-300">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr c>
                    <td className="border border-gray-300">{props.date}</td>
                    <td className="border border-gray-300">{props.reference}</td>
                    <td className="border border-gray-300">{props.amount}</td>
                </tr>
            </tbody>
        </table> 
    )
}

export default FileReport;