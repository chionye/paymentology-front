import { createContext, useState } from "react";

const FileContext = createContext(null);

const FileProvider = ({children}) => {
     const [file, setFile] = useState({
        file: '',
        fileName: ''
    });

    return(
        <FileContext.Provider value={{file, setFile}}>
            {children}
        </FileContext.Provider>
    )
}
