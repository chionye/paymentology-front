import { createContext, useContext, useState } from "react";

const FileContext = createContext(null);

export const FileProvider = ({children}) => {
     const [file, setFile] = useState({
        file1: '',
        noMatch1:'',
        fileName1: '',
        fileName2: '',
        noMatch2:''
    });

    return(
        <FileContext.Provider value={{file, setFile}}>
            {children}
        </FileContext.Provider>
    )
}

export const useFileContext = () => useContext(FileContext);
