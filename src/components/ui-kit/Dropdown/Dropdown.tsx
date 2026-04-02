import { useRef, type FC } from "react";
import styles from "./Dropdown.module.scss";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { useUIStore } from "../../../state/uiStore";

interface IDropdownProps {
  options: IOption[];
  isOpen: boolean;
  id: number;
}

interface IOption {
  label: string;
  method: (id: number) => void;
}

const Dropdown: FC<IDropdownProps> = ({ id, options, isOpen }) => {
  const { onClickDropdown } = useUIStore();

  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => {
    onClickDropdown(null);
  });

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className={`${styles.root} ${isOpen ? `${styles.isOpen}` : ""}`}
    >
      {options?.map((option) => (
        <div className={styles.optionWrapper} key={option.label}>
          <span className={styles.option} onClick={() => option.method(id)}>
            {option.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
