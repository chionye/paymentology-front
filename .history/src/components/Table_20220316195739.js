const Table = (props) => {
    return(
        <div className="w-full overflow-scroll">
            <table className="w-full border-collapse border-slate-500">
            <thead>
                <tr className="text-left">
                    <th>{\}</th>
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
            </thead>
            <tbody></tbody>
        </table>
        </div>
        
    )
}

export default Table;