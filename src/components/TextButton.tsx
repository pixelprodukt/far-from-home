import { ButtonProps } from '../models/ButtonProps';

interface TextButtonProps extends ButtonProps {
    title: string;
}

const TextButton = (props: TextButtonProps) => {
    return (
        <button onClick={props.onClick} className='text-base w-full text-left font-bold text-orange-500 px-4 py-2 rounded-md hover:bg-stone-900'>{props.title}</button>
    );
};

export default TextButton;