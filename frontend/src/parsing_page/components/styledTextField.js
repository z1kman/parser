import { TextField } from "@mui/material";
import styled from "styled-components";

const Input = styled(TextField)`
.MuiOutlinedInput-root{
    height:5%;
    min-height:40px;
    max-height: 100px;
    min-width:500px;
    max-width: 1200px;
    font-size:1em;
    width:100%;
}
  
`;

export default Input
