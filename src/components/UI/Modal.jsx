import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  children,
  open,
  className = "",
  onclose: onClose,
  ...props
}) {
  const dialogRef = useRef();

  useEffect(() => {
    const modal = dialogRef.current;

    if (open) {
      modal.showModal();

      const handleOutsideClick = (e) => {
        if (e.target === modal) {
          modal.close();
          onClose?.();
        }
      };

      modal.addEventListener("click", handleOutsideClick);
      return () => modal.removeEventListener("click", handleOutsideClick);
    } else {
      modal.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialogRef} className={`modal ${className}`} {...props}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
