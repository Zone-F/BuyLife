"use client"
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const AddCheck = () => {
  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [repeatCycle, setRepeatCycle] = useState('daily');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    // Handle the submission of form data
    // Add logic to save taskName, taskDescription, and repeatCycle to your backend or state management
    console.log({ taskName, taskDescription, repeatCycle });
    setOpen(false);
  };

  return (
    <div>
            <Button variant="contained">Contained</Button>

      <Button variant="contained" onClick={handleClickOpen} className="text-base mb-4">
        新增打卡任务
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="打卡任务名称"
            type="text"
            fullWidth
            variant="standard"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="description"
            label="打卡描述"
            type="text"
            fullWidth
            variant="standard"
            multiline
            minRows={3}
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <TextField
            select
            margin="dense"
            id="repeatCycle"
            label="重复周期"
            value={repeatCycle}
            onChange={(e) => setRepeatCycle(e.target.value)}
            fullWidth
            variant="standard"
          >
            <MenuItem value="daily">每日</MenuItem>
            {/* Add more menu items here for different cycles if needed */}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleSubmit}>提交</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddCheck;
