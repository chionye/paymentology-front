import { createContext, useContext, useState } from "react";

const FileContext = createContext(null);

export const FileProvider = ({children}) => {
     const [file, setFile] = useState({
        file1: '',
        fileName1: '',
        file2:'',
        fileName2: ''
    });

    return(
        <FileContext.Provider value={{file, setFile}}>
            {children}
        </FileContext.Provider>
    )
}

export const useFileContext = () => useContext(FileContext);
