import { createContext, useState } from "react";

const FileContext = createContext(null);

const FileProvider = ({children}) => {
    const [file, setFile]

    return(
        <FileContext.Provider value={}>
            {children}
        </FileContext.Provider>
    )
}
