import axios from "axios";
import Button from "./Button";
import Container from "./Container";
import InputFile from "./InputFile";
import Results from "./Results";
import Section from "./Section";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useFileContext } from "../context/index.context";
import { useState } from "react";
import {Link} from "react-scroll";
import { Oval } from  'react-loader-spinner';


const CompareFiles = () => {

    const {file, setFile} = useFileContext();
    const [summaryComponent, setSummaryComponent] = useState();
    const [buttonValue, setButtonValue] = useState("compare");
    const [buttonStat, setButtonStatus] = useState(false);

    const notify = (message) => {
        toast(message)
        setButtonStatus(false);
        setButtonValue("compare");
    };

    const fileUpload = (e) => {
        e.preventDefault();
        const formData = new FormData(document.getElementById("formSub"));
        setButtonStatus(true);
        setButtonValue(<Oval
            height="20"
            width="20"
            color='white'
            ariaLabel='loading'
        />);
        axios.post("https://paymentology-back.herokuapp.com/api/v1/transaction/upload-csv", formData)
        .then((Response)=>{
            if(Response.data !== ""){
                setFile({
                    ...file,
                    file1: Response.data.result,
                    fileName1: Response.data.result.name[0].name,
                    noMatch1:Response.data.result.noMatch.length,
                    fileName2: Response.data.result1.name[0].name,
                    noMatch2:Response.data.result1.noMatch.length,
                    file2: Response.data.result1,
                })
                addSummaryComponent();
                notify("Analysis complete");
            }else{
                notify("unsupported file format");
            }
        })
        .catch((err)=>{
            notify("something went wrong, please try again");
        })
    }

    const addSummaryComponent = (e) => {
        setSummaryComponent(<div className="bg-gray-light"><Results /></div>)
    }
    

    return(
        <>
        <ToastContainer />
        <Container>
            <Section title={"Select files to compare"}>
            <form id="formSub">
                <InputFile 
                file={"Select file 1"}
                 />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <InputFile 
                    file={"Select file 2"}
                    />
                    <div className="my-3 md:my-0 md:mr-5">
                    <Link activeClass={"active"} to={"result"} spy={true} smooth={true}>
                        <Button width={"w-full"} label={buttonValue} handleForm={fileUpload} stat={buttonStat}/>
                    </Link>
                    </div>
                </div>
                </form>
            </Section>
        </Container>
        {summaryComponent}
        </>
    )
}

export default CompareFiles;
