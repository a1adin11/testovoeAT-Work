import { useRef, type FC, type PropsWithChildren } from "react";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { useClickOutside } from "../../../hooks/useClickOutside";

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<PropsWithChildren<IModalProps>> = ({
  isOpen,
  onClose,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, () => {
    onClose();
  });
  
  if (!isOpen) return null;

  return createPortal(
    <div
      className={styles.wrapper}
      onClick={(e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={styles.root} ref={modalRef}>
        <div onClick={onClose} className={styles.closeBtn}>
          &times;
        </div>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
