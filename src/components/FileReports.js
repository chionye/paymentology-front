import Container from "./Container";
import FileReport from './FileReport';
import { useFileContext } from "../context/index.context";
import { useRef } from "react";
import Section from "./Section";

const FileReports = () => {
    const titleRef = useRef();
    const {file} = useFileContext();

    setTimeout(()=>titleRef.current.scrollIntoView({ behavior: 'smooth' }),200);
    let fileData = [...file.file.noMatch, ...file.file2.closeMatch];
    let fileData1 = [...file.file.closeMatch, ...file.file2.noMatch];
    let closeMatch = file.file.closeMatch.length;
    let noMatch = file.file.noMatch.length;
    
    return(
        <>
        <Container>
            <Section title={"Unmatched Report"}>
            <div className="w-full overflow-x-scroll flex flex-row" ref={titleRef}>
                <FileReport
                    fileName={file.fileName1}
                    match={fileData}
                    scope={"Unmatched Record"}
                    default={"Suggested Match"}
                    count={noMatch}
                />
                <FileReport
                    fileName={file.fileName2}
                    match={fileData1}
                    scope={"Suggested Match"}
                    default={"Unmatched Record"}
                    count={closeMatch}
                />
            </div>
            </Section>
        </Container>
        </>
    )
}

export default FileReports;