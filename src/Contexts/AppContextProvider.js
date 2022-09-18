import React,{ createContext, useState } from "react";

const INIT_DATA = {
    currency: "usd",
    languages: "en",
}
export const AppContext = createContext(INIT_DATA);

export default function AppProvider({children}) {

const [appData, setAppData] = useState(INIT_DATA);

const updateCurrency = (currencyValue) => {
    if(!currencyValue){
        return;
    }
    setAppData({...appData, currency: currencyValue});
};
const updateLanguage = (language) => {
    if(!language){
        return;
    }
    setAppData({...appData, languages:language});
}
return (
    <AppContext.Provider value={{...appData,updateCurrency,updateLanguage}}>
        {children}
    </AppContext.Provider>
)
}
