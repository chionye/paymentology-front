import { useFileContext } from "../context/index.context";
import FileReport from './FileReport';

const FileReports = () => {
    const {file} = useFileContext();

    return(
        <div className="w-full overflow-x-scroll flex flex-row">
            <FileReport 
            fileName={file.file}
            date={'2021-03-22'}
            reference={'Red'}
            amount={'33,000.00'} />
            <FileReport 
            fileName={'File 2'}
            date={'2021-03-22'}
            reference={'Red'}
            amount={'33,000.00'} />
        </div>
        
    )
}

export default FileReports;