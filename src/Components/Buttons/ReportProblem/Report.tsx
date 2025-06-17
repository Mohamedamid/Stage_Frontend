import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ReportIcon from '@mui/icons-material/Report';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/GridLegacy';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles?.('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Report: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} title="Voir le rapport">
        <ReportIcon />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 1000,
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'auto',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 6,
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            rowSpacing={2}
            columnSpacing={{ xs: 2, sm: 3, md: 4 }}
          >
            <Grid item xs={6}>
              <Item><strong>Nom du médecin :</strong> Dr. Ahmed Mansouri</Item>
            </Grid>
            <Grid item xs={6}>
              <Item><strong>Numéro d’enregistrement :</strong> 123456789</Item>
            </Grid>

            <Grid item xs={6}>
              <Item><strong>Nom du patient :</strong> Mohamed Ali Al-Qahtani</Item>
            </Grid>
            <Grid item xs={6}>
              <Item><strong>Numéro de dossier médical :</strong> PAT-202306</Item>
            </Grid>

            <Grid item xs={6}>
              <Item><strong>Date de la visite :</strong> 01/06/2025</Item>
            </Grid>
            <Grid item xs={6}>
              <Item><strong>Type de service :</strong> Consultation spécialisée</Item>
            </Grid>

            <Grid item xs={12}>
              <Item>
                <strong>Motif du refus de remboursement :</strong><br />
                La demande de remboursement a été refusée car le service demandé n’est pas couvert par la police d’assurance selon l’article 4.2.
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default Report;
