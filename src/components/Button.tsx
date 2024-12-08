interface ButtonProps {
    title: string;
}

const Button = ({title}: ButtonProps) => {
    return (
        <button className='text-lg font-bold text-orange-500 px-3 py-1 rounded-md hover:bg-gray-900'>{title}</button>
    );
};

export default Button;