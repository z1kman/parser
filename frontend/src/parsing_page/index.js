import React from "react";
import InputWithButton from "./components/inputWithButton/inputWithButton";
import { ParsingPageProvider } from "./store";
import './index.css'

export default function ParsingPage() {
    return (
        <>
            <ParsingPageProvider >
                <div className='root' >
                    <InputWithButton />
                </div>
            </ParsingPageProvider>
        </>
    )
}