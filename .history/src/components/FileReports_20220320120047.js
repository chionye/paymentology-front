import { useFileContext } from "../context/index.context";
import FileReport from './FileReport';

const FileReports = (props) => {
    const {file} = useFileContext();

    return(
        <div className="w-full overflow-x-scroll flex flex-row">
            <FileReport 
            fileName={'Hello'}
            date={'2021-03-22'}
            reference={'Red'}
            amount={'33,000.00'} />
            <FileReport 
            fileName={file.fileName2}
            date={'2021-03-22'}
            reference={'Red'}
            amount={'33,000.00'} />
        </div>
        
    )
}

export default FileReports;