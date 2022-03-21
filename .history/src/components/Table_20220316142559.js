const Table = () => {
    return(
        <table className="w-full border-collapse border-slate-500">
            <tr className="text-left">
                <th>file1.csv</th>
                <th></th>
                <th></th>
                <th>file2.csv</th>
                <th></th>
                <th></th>
            </tr>
            <tr className="text-left text-slate-500">
                <th>Date</th>
                <th>Reference</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Reference</th>
                <th>Amount</th>
            </tr>
        </table>
    )
}

export default Table;