"use client";

const AddCheck = () => {
  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [repeatCycle, setRepeatCycle] = useState("daily");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log({ taskName, taskDescription, repeatCycle });
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        新增打卡任务
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>新增打卡任务</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="taskName"
            label="打卡任务名称"
            type="text"
            fullWidth
            onChange={(e) => setTaskName(e.target.value)}
          />
          <TextField
            margin="dense"
            name="taskDescription"
            label="打卡描述"
            type="text"
            fullWidth
            multiline
            rows={3}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <TextField
            select
            margin="dense"
            name="repeatCycle"
            label="重复周期"
            value={repeatCycle}
            fullWidth
            onChange={(e) => setRepeatCycle(e.target.value)}
          >
            <MenuItem value="daily">每日</MenuItem>
            {/* Add more menu items here for different cycles if needed */}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            取消
          </Button>
          <Button onClick={handleSubmit} color="primary">
            提交
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddCheck;