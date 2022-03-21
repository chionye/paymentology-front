import Button from "./Button";
import CloseMatchReport from "./CloseMatchReport";
import Container from "./Container";
import FileReport from './FileReport';
import { useFileContext } from "../context/index.context";
import { useState } from "react";
import Section from "./Section";

const FileReports = () => {
    const {file} = useFileContext();

    const [getCloseMatchReport, setCloseMatchReport] = useState();

    const generateCloseMatchReport = () => {
        setCloseMatchReport(
            <CloseMatchReport />
        );
    }

    return(
        <>
        <Container>
            <Section title={"Unmatched Report"}>
            <div className="w-full overflow-x-scroll flex flex-row">
                <FileReport 
                    fileName={file.fileName1} 
                    match={file.file1.noMatch}  
                />
                <FileReport 
                    fileName={file.fileName2} 
                    match={file.file2.noMatch} 
                />
            </div>
            <div className="my-3 md:my-0 md:mr-5">
                <Button width={"w-full"} label={"Close Match Report"}  handleForm={generateCloseMatchReport} stat={false}/>
            </div>
            </Section>
        </Container>
        {getCloseMatchReport}
        </>
    )
}

export default FileReports;