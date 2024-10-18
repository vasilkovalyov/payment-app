import { useState } from "react";

interface UseDialogModalReturnType {
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export default function useDialogModal(): UseDialogModalReturnType {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  function openModal(): void {
    setIsOpenModal(true);
  }

  function closeModal(): void {
    setIsOpenModal(false);
  }

  return {
    isOpenModal,
    openModal,
    closeModal
  };
}
