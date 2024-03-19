// AddProductModal.js
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const AddProductModal = ({ onProductAdd }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    points: "",
    stock: "",
  });

  // 处理输入变化
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 提交表单
  const handleSubmit = () => {
    // 验证输入值...

    // 添加成功后的逻辑...
    onProductAdd(formData);
    setOpen(false); // 关闭对话框
  };

  // 对话框打开
  const handleClickOpen = () => {
    setOpen(true);
  };

  // 对话框关闭
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        添加商品
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>添加新商品</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="商品名称"
            type="text"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="points"
            label="所需积分"
            type="number"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="stock"
            label="上架数量"
            type="number"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            取消
          </Button>
          <Button onClick={handleSubmit} color="primary">
            确定
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddProductModal;