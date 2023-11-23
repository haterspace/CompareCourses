import React, { useState } from 'react';
import { Modal, Box, Typography, FormControl, Select, MenuItem, Button } from '@mui/material';

export type preferencesType = {
  format: string;
  duration: string;
  givesDiplom: string;
  cost: string;
};
type PreferencesModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  filters: preferencesType;
  setFilters: (filters: preferencesType) => void;
};

function PreferencesModal({ open, setOpen, filters, setFilters }: PreferencesModalProps) {
  const handleChange = (event, filterName) => {
    setFilters({
      ...filters,
      [filterName]: event.target.value,
    });
  };

  const handleApplyFilters = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={() => handleApplyFilters()}>
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 2,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Typography variant="h5" component="div" display={'flex'} justifyContent={'center'}>
          Предпочтения:
        </Typography>
        <FormControl fullWidth sx={{ my: 2 }}>
          <Typography>Формат курса</Typography>
          <Select value={filters.format} onChange={(event) => handleChange(event, 'format')}>
            <MenuItem value="Online">Онлайн</MenuItem>
            <MenuItem value="Offline">Оффлайн</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ my: 2 }}>
            <Typography>Продолжительность курса</Typography>
          <Select value={filters.duration} onChange={(event) => handleChange(event, 'duration')}>
            <MenuItem value="more">Больше</MenuItem>
            <MenuItem value="less">Меньше</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ my: 2 }}>
        <Typography>Дает ли диплом гос образца после окончания</Typography>
          <Select
            value={filters.givesDiplom}
            onChange={(event) => handleChange(event, 'givesDiplom')}
          >
            <MenuItem value="true">Да</MenuItem>
            <MenuItem value="false">Нет</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ my: 2 }}>
            <Typography>Стоимость</Typography>
          <Select value={filters.cost} onChange={(event) => handleChange(event, 'cost')}>
            <MenuItem value="cheaper">Дешевле</MenuItem>
            <MenuItem value="expensive">Дороже</MenuItem>
          </Select>
        </FormControl>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <Button variant="contained" color="primary" onClick={() => setOpen(false)} sx={{ mt: 2 }}>
          Применить
        </Button>
        <Button variant="contained" color="primary" onClick={() => setOpen(false)} sx={{ mt: 2 }}>
          Отменить
        </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default PreferencesModal;
