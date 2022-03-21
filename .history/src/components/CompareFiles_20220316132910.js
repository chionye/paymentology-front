import Section from "./Section";

const CompareFiles = () => {
    return(
        <Section title={"Select files to compare"}>
            <InputFile file={"Select file 1"} />
            <div className="flex flex-row items-center justify-between">
                <InputFile file={"Select file 2"} />
                <Button label={"Compare"} />
            </div>
        </Section>
    )
}

export default CompareFiles;