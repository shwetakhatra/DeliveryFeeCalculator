export default interface ToastCompProps {
  show: boolean;
  onClose: () => void;
  message: string;
}