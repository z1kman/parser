import Input from './styledTextField'
import Button from '@mui/material/Button';
import './inputWithButton.css'
import React from 'react';
import axios from 'axios';

const handleClickParseIt = (link) => {
    fetch('/parseSite', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({link:link})
    })
        .then(res => {
            console.log(res);
        })

    // axios.post('/parseSite', {link: link})
    //     .then(res => {
    //     console.log(res);
    // })

}

const handleOnChange = (event, setLink) => {
    setLink(event.target.value)
}
export default function InputWithButton() {
    const [link, setLink] = React.useState();
    return (
        <>
            <div className='root'>
                <div className='input'>
                    <Input onChange={(event) => { handleOnChange(event, setLink) }} />
                </div>
                <Button variant="contained" onClick={() => handleClickParseIt(link)}> Парсить! </Button>
            </div>
        </>
    )
}