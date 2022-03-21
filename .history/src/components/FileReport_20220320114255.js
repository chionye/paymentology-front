const FileReport = (props) => {
    return(
        <table className="w-1/2 border-collapse border-gray-300 text-sm">
            <thead>
                <tr className="text-left">
                    <th className="font-medium">{props.fileName}</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr className="text-left text-slate-500">
                    <th>Date</th>
                    <th>Reference</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{</td>
                    <td>Reference</td>
                    <td>33,000.00</td>
                </tr>
            </tbody>
        </table> 
    )
}

export default FileReport;