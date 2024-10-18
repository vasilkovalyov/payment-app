import { FC, ReactNode } from "react";

import {
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "./DialogModal.scss";

export type DialogModalProps = {
  open: boolean;
  pretitleIcon?: ReactNode;
  title?: string;
  children: ReactNode;
  onClose?: () => void;
};

const DialogModal: FC<DialogModalProps> = ({
  open,
  title,
  pretitleIcon,
  children,
  onClose
}) => {
  return (
    <Dialog open={open} onClose={onClose} className="dialog-modal">
      {title && (
        <DialogTitle component="div">
          <Stack direction="row" alignItems="center" gap="6px">
            {pretitleIcon}
            {title}
          </Stack>
          <Button onClick={onClose} className="dialog-modal__close-btn">
            <CloseIcon />
          </Button>
        </DialogTitle>
      )}
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default DialogModal;
