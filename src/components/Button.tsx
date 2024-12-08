interface ButtonProps {
    title: string;
}

const Button = ({title}: ButtonProps) => {
    return (
        <button className='text-base w-full text-left font-bold text-orange-500 px-4 py-2 rounded-md hover:bg-stone-900'>{title}</button>
    );
};

export default Button;