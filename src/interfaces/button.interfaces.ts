export default interface ButtonProps {
    label: string;
    type: 'button' | 'submit' | 'reset'
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}