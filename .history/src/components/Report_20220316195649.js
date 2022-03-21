import Container from "./Container";
import Section from "./Section";
import Table from "./Table";
import { useFileContext } from "../context/index.context";
const Report = () => {
    return(
        <Container>
            <Section title={"Unmatched Report"}>
                <Table />
            </Section>
        </Container>
    )
}

export default Report;