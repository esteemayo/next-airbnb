interface ModalProps {
  isOpen?: boolean;
  onClose(): void;
  onSubmit(): void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?(): void;
  secondaryLabel?(): string;
}

const Modal: React.FC<ModalProps> = () => {
  return <div>Modal</div>;
};

export default Modal;
