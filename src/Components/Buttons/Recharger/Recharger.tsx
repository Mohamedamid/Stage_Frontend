import React from 'react';
import Button from '@mui/material/Button';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Swal from 'sweetalert2';

const Recharger: React.FC = () => {
  const handleClick = () => {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, continuer !',
      cancelButtonText: 'Annuler'
    });    
  };

  return (
    <div>
      <Button title="Recharger" onClick={handleClick}>
        <AutorenewIcon />
      </Button>
      
    </div>
  );
};

export default Recharger;

