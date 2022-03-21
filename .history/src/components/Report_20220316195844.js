import Container from "./Container";
import Section from "./Section";
import Table from "./Table";
import { useFileContext } from "../context/index.context";

const Report = () => {
    const { file } = useFileContext();
    return(
        <Container>
            <Section title={"Unmatched Report"}>
                <Table
                    fileName1={file.file}
                />
            </Section>
        </Container>
    )
}

export default Report;