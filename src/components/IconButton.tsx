import { PropsWithChildren } from 'react';
import { ButtonProps } from '../models/ButtonProps';

const IconButton = (props: PropsWithChildren<ButtonProps>) => {
    return (
        <>
            <button onClick={props.onClick} className='w-10 h-10 flex items-center justify-center rounded outline outline-2 outline-white m-2 hover:bg-stone-900'>{props.children}</button>
        </>
    );
};

export default IconButton;