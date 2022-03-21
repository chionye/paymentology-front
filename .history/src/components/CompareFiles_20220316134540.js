import Button from "./Button";
import Container from "./Container";
import InputFile from "./InputFile";
import Section from "./Section";

const CompareFiles = () => {
    return(
        <Container>
            <Section title={"Select files to compare"}>
                <InputFile file={"Select file 1"} />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <InputFile file={"Select file 2"} />
                    <div className="my-3 md:my-0">
                    <Button cl label={"Compare"} />
                    </div>
                    
                </div>
            </Section>
        </Container>
        
    )
}

export default CompareFiles;