const Table = (props) => {
    return(
        <div className="w-full overflow-scroll">
            <table className="w-full border-collapse border-gray-300">
            <thead>
                <tr className="text-left font">
                    <th>{props.fileName1}</th>
                    <th></th>
                    <th></th>
                    <th>{props.fileName2}</th>
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