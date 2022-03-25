import Container from "./Container";
import FileReport from './FileReport';
import { useFileContext } from "../context/index.context";
import { useRef } from "react";
import Section from "./Section";

const FileReports = () => {
    const titleRef = useRef();
    const {file} = useFileContext();

    setTimeout(()=>titleRef.current.scrollIntoView({ behavior: 'smooth' }),200);

    return(
        <>
        <Container>
            <Section title={"Unmatched Report"}>
            <div className="w-full overflow-x-scroll flex flex-row" ref={titleRef}>
                <FileReport 
                    fileName={file.fileName1} 
                    match={file.file1.closeMatch}
                />
                <FileReport
                    fileName={file.fileName2} 
                    match={file.file1.noMatch}
                />
            </div>
            </Section>
        </Container>
        </>
    )
}

export default FileReports;