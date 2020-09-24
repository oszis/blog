import React from 'react';
import {StyledInput} from './input.style';

interface InputProps {
    onChange: (query: string) => void
    placeholder?: string
}

const Input: React.FC<InputProps> = ({onChange, placeholder = ''}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    }
    
    return <StyledInput onChange={handleChange}></StyledInput>;
};

export default Input;