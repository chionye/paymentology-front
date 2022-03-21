import FileReport from './FileReport'
const Table = (props) => {
    return(
        <div className="w-full overflow-y-scroll flex flex-row">
            <table className="w-1/2 border-collapse border-gray-300">
            <thead>
                <tr className="text-left">
                    <th className="font-medium">{props.fileName1}</th>
                    <th></th>
                    <th></th>
                    
                </tr>
                <tr className="text-left text-slate-500">
                    <th>Date</th>
                    <th>Reference</th>
                    <th>Amount</th>

                </tr>
            </thead>
            <tbody></tbody>
            </table>
            <table className="w-1/2 border-collapse border-gray-300">
            <thead>
                <tr className="text-left">
                    <th className="font-medium">{props.fileName2}</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr className="text-left text-slate-500">
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