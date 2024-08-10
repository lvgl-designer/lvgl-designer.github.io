import { FC, ReactNode } from 'react';

interface DownloadDialogProps {
  open: boolean;
  onClose: () => void;
  content: ReactNode;
}

export const DownloadDialog: FC<DownloadDialogProps> = ({
  open,
  onClose,
  content,
}) => {
  if (!open) {
    return <></>;
  }

  return <div>{content}</div>;
};
