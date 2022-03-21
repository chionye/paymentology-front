const FileReport = (props) => {
    return(
        <table className="w-1/2 border-collapse border-gray-300 text-sm">
            <thead>
                <tr className="text-left">
                    <th className="font-medium">{props.fileName}</th>
                    
                </tr>
                <tr className="text-left text-slate-500">
                    <th>Date</th>
                    <th>Reference</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.date}</td>
                    <td>{props.reference}</td>
                    <td>{props.amount}</td>
                </tr>
            </tbody>
        </table> 
    )
}

export default FileReport;