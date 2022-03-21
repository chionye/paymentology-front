import FileReport from './FileReport';

const Table = (props) => {
    return(
        <div className="w-full overflow-y-scroll flex flex-row">
            <FileReport 
            fileName={'File 1'}
            date={''} />
            <FileReport fileName={'File 2'} />
        </div>
        
    )
}

export default Table;