import React from 'react';
import Input from '../styledTextField';
import { Button } from '@mui/material';
import { ParsingPageContext } from '../../store';
import './inputWithButton.css'

const handleOnChange = (event, setLink) => {
    setLink(event.target.value)
}

export default function InputWithButton() {
    const context = React.useContext(ParsingPageContext)
    const [link, setLink] = React.useState();
    
    return (
        <>
            <div className='root'>
                <div className='components_block'>
                    <div className='input_block'>
                        <Input fullWidth onChange={(event) => { handleOnChange(event, setLink) }} />
                    </div>
                    <div className='button_block'>
                        <Button className='button' variant="contained" onClick={() => context.handleClickParseIt(link)}> Парсить! </Button>
                    </div>
                </div>
            </div>
        </>
    )
}