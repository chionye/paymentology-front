const Table = () => {
    return(
        <table className="w-full border-collapse border-slate-500 ">
            <thead>
                <tr className="text-left tracking-wider">
                    <th>file1.csv</th>
                    <th></th>
                    <th></th>
                    <th>file2.csv</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr className="text-left text-slate-500 tracking-wider">
                    <th>Date</th>
                    <th>Reference</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Reference</th>
                    <th>Amount</th>
                </tr>
            </thead>
            
        </table>
    )
}

export default Table;