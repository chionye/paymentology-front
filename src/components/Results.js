import Button from "./Button";
import Container from "./Container";
import FileSummary from "./FileSummary";
import FileReports from "./FileReports";
import Section from "./Section";
import { useFileContext } from "../context/index.context";
import { useState } from "react";

const Results = () => {
    const {file} = useFileContext();
    const [getReport, setReport] = useState();

    const generateReport = () => {

        setReport(
            <FileReports />
        );
    }

    return(
        <>
        <Container>
            <Section title={"Comparison results"}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <FileSummary
                        fileName={file.fileName1}
                        totalRecords={file.file1.len[0].size}
                        matchingRecords={file.file1.len[0].size - file.file1.noMatch.length}
                        unmatchedRecords={file.file1.noMatch.length}
                    />
                    <FileSummary
                        fileName={file.fileName2}
                        totalRecords={file.file2.len[0].size}
                        matchingRecords={file.file2.len[0].size - file.file2.noMatch.length}
                        unmatchedRecords={file.file2.noMatch.length} 
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