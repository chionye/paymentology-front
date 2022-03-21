import Container from "./Container";
import Section from "./Section";
import FileReports from "./FileReport";
import { useFileContext } from "../context/index.context";

const Report = () => {
    const { file } = useFileContext();
    return(
        <Container>
            <Section title={"Unmatched Report"}>
                <Table
                    fileName1={file.fileName1}
                    fileName2={file.fileName2}
                />
            </Section>
        </Container>
    )
}

export default Report;