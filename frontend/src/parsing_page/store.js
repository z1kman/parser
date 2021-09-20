import React from 'react';
import parseIt from './handlers/parseIt';


const ParsingPageContext = React.createContext();

function ParsingPageProvider(props) {
    const [parseLoading, setParseLoading] = React.useState(false);


    const handleClickParseIt = (link) => {
        parseIt(link, setParseLoading);
    }
    
    return (
        <ParsingPageContext.Provider
            value={{
                handleClickParseIt
            }}
            {...props}
        />
    );
}

export { ParsingPageProvider, ParsingPageContext };
