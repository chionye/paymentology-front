import Container from "./Container";
import FileReport from './FileReport';
import { useFileContext } from "../context/index.context";
import Section from "./Section";

const SuggestedMatches = () => {

    const {file} = useFileContext();

    console.log(file.file.closeMatch);
    
    return(
        <>
        <Container>
        <Section title={"Suggested Matches"}>
            <div className="w-full overflow-x-scroll flex flex-row">
                <FileReport 
                    fileName={file.fileName2}
                    match={file.file.closeMatch}
                />
                <FileReport
                    fileName={file.fileName1}
                    match={file.file2.closeMatch}
                />
            </div>
            </Section>
        </Container>
        </>
    )
}

export default SuggestedMatches;