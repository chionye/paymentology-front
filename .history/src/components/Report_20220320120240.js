import Container from "./Container";
import Section from "./Section";
import FileReports from "./FileReports";
import { useFileContext } from "../context/index.context";

const Report = () => {
    const { file } = useFileContext();
    return(
        <Container>
            <Section title={"Unmatched Report"}>
                <FileReports />
            </Section>
        </Container>
    )
}

export default Report;