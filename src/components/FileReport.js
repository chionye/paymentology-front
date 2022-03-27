import Badge from "./Badge";

const FileReport = (props) => {
    let count = props.count;
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
                {
                    props.match.map((nonMatches)=>{
                        return (
                            <tr className='odd:bg-white even:bg-gray-light hover:bg-white hover:text-blue hover:font-medium'>
                                <td className="border border-gray-300 px-2 py-2 relative">
                                    {
                                    count <= 0 ?
                                    <span className="absolute "><Badge display={"block"} color={"text-red"} data={props.default} /></span>
                                    :
                                    <span className="absolute "><Badge display={"block"} color={"text-green"} data={props.scope}/></span>
                                    }
                                    {count--}
                                    <div className="pt-5">
                                    {nonMatches.TransactionDate || "N/A"}
                                    </div>
                                </td>
                                <td className="border border-gray-300 px-2 py-2 relative">
                                    <span className="absolute "> </span>
                                    <div className="pt-5">
                                    {nonMatches.WalletReference|| "N/A"}
                                    </div>
                                </td>
                                <td className="border border-gray-300 px-2 py-2 relative">
                                    <span className="absolute "> </span>
                                    <div className="pt-5">
                                    {nonMatches.TransactionAmount || "N/A"}
                                    </div>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table> 
    )
}

export default FileReport;