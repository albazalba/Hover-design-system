import React, { useState } from 'react'
import styled from '@emotion/styled'
import { THEME } from '../../theme';
// import { textExtraLight } from '../../Styles/themes'
// import { AiFillPropertySafety } from 'react-icons/ai'

export interface VARIANT{
    rounded:"rounded",
    rectangle:"rectangle",
};

export interface ACCENT{
    primary:"primary",
    success:"success",

};

export interface SwitchProps{
    onChange? : any,
    variant ?: VARIANT[keyof VARIANT],
    accent ?: ACCENT[keyof ACCENT],
    label?: string
};

export const Switch = (props: SwitchProps) => {
    const { onChange, accent, variant } = props;
    return (
        <SwitchContainer variant={variant} accent={accent}>
            <input type="checkbox" onChange={onChange} />
            <span className="slider" />
        </SwitchContainer>
    )
}

const SwitchContainer = styled.label<SwitchProps>`
    position: relative;
    display: inline-block;
    width: 28px;
    height: 15px;
    border-radius: ${(props) => props.variant === "rounded" ? "17px" : "0"};
    background-color: #CDCFD9;
    margin-left: 5px;
    input{
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider{
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: 0.4s;
        &:before{
            position: absolute;
            content: "";
            height: auto;
            width: 13px;
            left: 1px;
            top: 1px;
            bottom: 1px;
            background-color: white;
            border: 1px solid none;
            border-radius: ${(props) => props.variant === "rounded" ? "17px" : "0"};
            transition: 0.4s;
            /* box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%); */
        }
    }
    input:checked + .slider{
        background-color: ${(props) => props.accent === "primary" ? THEME.colors.primary : THEME.colors.success};
        border-radius: ${(props) => props.variant === "rounded" ? "15px" : "0"};
    }

    input:checked + .slider:before{
        transform: translateX(13px);
    }
`;


