import Container from "./Container";
import Section from "./Section";
import FileReports from "./FileReports";


const Report = () => {
    
    return(
        <Container>
            <Section title={"Unmatched Report"}>
                <FileReports />
            </Section>
        </Container>
    )
}

export default Report;