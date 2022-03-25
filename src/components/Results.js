import Button from "./Button";
import Container from "./Container";
import FileSummary from "./FileSummary";
import FileReports from "./FileReports";
import Section from "./Section";
import { useFileContext } from "../context/index.context";
import { useState, useRef } from "react";

const Results = (props) => {
    const titleRef = useRef()
    const {file} = useFileContext();
    const [getReport, setReport] = useState();
    setTimeout(()=>titleRef.current.scrollIntoView({ behavior: 'smooth' }),200);
    
    const generateReport = () => {
        setReport(
            <FileReports />
        );
    }
    console.log(file)
    return(
        <>
        <Container>
            <Section title={"Comparison results"}>
                <div className={`${props.loader} flex flex-col md:flex-row md:justify-between md:items-center`} ref={titleRef}>
                    <FileSummary
                        fileName={file.fileName1}
                        totalRecords={file.file1.len[0].size}
                        matchingRecords={file.file1.len[0].size - file.file1.noMatch.length}
                        unmatchedRecords={file.noMatch1}
                    />
                    <FileSummary
                        fileName={file.fileName2}
                        totalRecords={file.file1.len[1].size1}
                        matchingRecords={file.file1.len[1].size1 - file.file1.noMatch.length}
                        unmatchedRecords={file.noMatch2}
                    />
                </div>
                <div className="md:flex md:w-44 md:justify-center md:mx-auto">
                        <Button width={"w-full"} label={"Unmatched Report"} handleForm={generateReport} disabled={false}/>
                </div>
            </Section>
        </Container>
        {getReport}
        </>
    )
}

export default Results;