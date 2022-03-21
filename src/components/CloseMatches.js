import { useFileContext } from "../context/index.context";
import FileReport from './FileReport';
import Button from "./Button";

const CloseMatches = () => {
    const {file} = useFileContext();

    return(
        <>
        <div className="w-full overflow-x-scroll flex flex-row">
            <FileReport
                fileName={file.fileName1} 
                match={file.file1.closeMatch}  
            />
            <FileReport 
                fileName={file.fileName2} 
                match={file.file2.closeMatch} 
            />
        </div>
        <div className="my-3 md:my-0 md:mr-5">
            <Button width={"w-full"} label={"Close Match Report"}  handleForm={""} stat={false}/>
        </div>
        </>
    )
}

export default CloseMatches;