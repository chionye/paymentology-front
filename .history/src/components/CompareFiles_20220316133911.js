import Button from "./Button";
import Container from "./Container";
import InputFile from "./InputFile";
import Section from "./Section";

const CompareFiles = () => {
    return(
        <Container>
            <Section title={"Select files to compare"}>
                <InputFile file={"Select file 1"} />
                <div className="flex flex-row items-center justify-between">
                    <InputFile file={"Select file 2"} />
                    <Button label={"Compare"} />
                </div>
            </Section>
        </Container>
        
    )
}

export default CompareFiles;