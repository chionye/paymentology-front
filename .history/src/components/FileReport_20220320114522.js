const FileReport = (props) => {
    return(
        <table className="w-1/2 border-collapse border-gray-300 text-sm">
            <thead>
                <tr className="text-left">
                    <th className="font-medium bg-blue-500" colSpan={3} >{props.fileName}</th>
                </tr>
                <tr className="text-left text-slate-500">
                    <th className="border border-slate-300">Date</th>
                    <th className="border border-slate-300">Reference</th>
                    <th className="border border-slate-300">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-slate-300">{props.date}</td>
                    <td>{props.reference}</td>
                    <td>{props.amount}</td>
                </tr>
            </tbody>
        </table> 
    )
}

export default FileReport;