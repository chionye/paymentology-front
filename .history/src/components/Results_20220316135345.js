import Container from "./Container";
import FileSummary from "./FileSummary";
import Section from "./Section";

const Results = () => {
    return(
        <Container>
            <Section title={"Comparison results"}>
                <div className="flex flex-col md:flex-row">
                    <FileSummary />
                    <FileSummary />
                </div>
            </Section>
        </Container>
    )
}

export default Results;