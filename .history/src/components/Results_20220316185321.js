import Button from "./Button";
import Container from "./Container";
import FileSummary from "./FileSummary";
import Section from "./Section";

const Results = () => {
    return(
        <Container>
            <Section title={"Comparison results"}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <FileSummary />
                    <FileSummary />
                </div>
                <div className="md:flex md:w-44 md:justify-center md:mx-auto">
                        <Button width={"w-full"} label={"Unmatched Report"} />
                </div>
            </Section>
        </Container>
    )
}

export default Results;