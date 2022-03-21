import FileReport from './FileReport';

const Table = (props) => {
    return(
        <div className="w-full overflow-y-scroll flex flex-row">
            <FileReport fileName={'File 1'} />
            
        </div>
        
    )
}

export default Table;