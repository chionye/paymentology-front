import Container from "./Container";
import FileReport from './FileReport';
import Section from "./Section";
import { useRef } from "react";
import { useFileContext } from "../context/index.context";


const CloseMatcheReport = () => {
    const titleRef = useRef()
    const {file} = useFileContext();
    setTimeout(()=>titleRef.current.scrollIntoView({ behavior: 'smooth' }),200);

    return(
        <>
        <Container>
        <Section title={"Close Matches Report"}>
        <div className="w-full overflow-x-scroll flex flex-row" ref={titleRef}>
            <FileReport
                fileName={file.fileName1} 
                match={file.file1.closeMatch}  
            />
            <FileReport 
                fileName={file.fileName2} 
                match={file.file1.closeMatchedTo} 
            />
        </div>
        </Section>
        </Container> 
        </>
    )
}

export default CloseMatcheReport;