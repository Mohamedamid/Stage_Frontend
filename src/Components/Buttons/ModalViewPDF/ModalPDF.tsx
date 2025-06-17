import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import PDFViewer from '../../PDF/PDFViewer';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalViewDPF: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} title="View PDF"><RemoveRedEyeSharpIcon /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ width: '80%' }}>
          <PDFViewer />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalViewDPF;
