import Container from "./Container";
import FileSummary from "./FileSummary";
import Section from "./Section";

const Results = () => {
    return(
        <Container>
            <Section title={"Comparison results"}>
                <div className="flex flexmd:flex-row">
                    <FileSummary />
                    <FileSummary />
                </div>
            </Section>
        </Container>
    )
}

export default Results;