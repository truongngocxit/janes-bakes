import classes from "./ConfirmModal.module.css";
import CloseSVG from "../UI/CloseSVG";

const ConfirmModal = function ({ className, onConfirm, onCancel }) {
  const {
    confirmModal,
    modalMessage,
    modalActions,
    closeBtn,
    confirmBtn,
    cancelBtn,
  } = classes;
  return (
    <>
      <div className={confirmModal}>
        <header className={closeBtn} onClick={onCancel}>
          <CloseSVG />
        </header>
        <div className={modalMessage}>
          <h3>Are you sure you want to delete this item?</h3>
        </div>
        <div className={modalActions}>
          <button className={confirmBtn} onClick={onConfirm}>
            Sure
          </button>
          <button className={cancelBtn} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal;
