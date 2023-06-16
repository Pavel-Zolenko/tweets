import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";


export const BackLink= styled(NavLink)` 
    position: absolute;
    left: 20px;
    top:0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    
    width: 160px;
    height: 30px;
    margin-left: 20px;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.22;
    color: #373737;
    border-radius: 10px;
    background-color: #ebd8ff82;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-color: transparent;
    cursor: pointer;
    text-decoration: none;

    &:hover,
    &:focus {
        background-color: #e2d0f5ee;
    }
`;
