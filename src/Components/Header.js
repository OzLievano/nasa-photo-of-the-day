import React, { Component } from 'react';
import styled from "styled-components";
import {CardHeader} from 'reactstrap';

const StyleH1 = styled.h1`
    font-family:robto;
    text-align:center;
    font-weight:bolder;
`;

const Header = () => {
    return(
            <CardHeader><StyleH1>NASA's Photo Of The Day</StyleH1></CardHeader>
    )
}

export default Header;