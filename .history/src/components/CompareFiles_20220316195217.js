import Button from "./Button";
import Container from "./Container";
import InputFile from "./InputFile";
import Section from "./Section";
import { useFileContext } from "../context/index.context";

const CompareFiles = () => {
    const {file, setFile} = useFileContext();

    const saveFile_1 = e => {
        setFile({
            ...file,
            file1: e.target.files[0],
            fileName1: e.target.files[0].name
        })
    }

    const saveFile_2 = e => {
        setFile({
            ...file,
            file2: e.target.files[0],
            fileName2: e.target.files[0].name
        })
    }

    console.log(file);
    return(
        <Container>
            <Section title={"Select files to compare"}>
                <InputFile 
                file={"Select file 1"}
                handleFile={saveFile_2} />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <InputFile 
                    file={"Select file 2"}
                    handleFile={saveFile_2} 
                    />
                    <div className="my-3 md:my-0">
                    <Button width={"w-full"} label={"Compare"} />
                    </div>
                    
                </div>
            </Section>
        </Container>
        
    )
}

export default CompareFiles;