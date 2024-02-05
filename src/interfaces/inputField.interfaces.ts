export default interface InputFieldProps {
    label: string;
    type: string;
    placeholder: string;
    value: string | number;
    onChange: (value: string) => void;
}