"use client";
import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import AddProductModal from "./AddProductModal";

const StorePage = () => {
  // 假设这是从后端API获取的商品数据
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "商品A",
      points: 100,
      stock: 10,
    },
    {
      id: 2,
      name: "商品B",
      points: 200,
      stock: 20,
    },
    {
      id: 3,
      name: "商品C",
      points: 300,
      stock: 15,
    },
    // ...其他商品
  ]);

  // 用户积分（假设从用户状态获取）
  const [userPoints, setUserPoints] = useState(1000);
  // 弹窗状态
  const [openSnackbar, setOpenSnackbar] = useState(false);
  // 弹窗消息
  const [snackbarMessage, setSnackbarMessage] = useState("");
  // 弹窗严重性
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");

  // 显示Snackbar
  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  };

  // 当Snackbar关闭时触发
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  // 购买商品
  const handlePurchase = (product) => {
    if (userPoints >= product.points) {
      // 执行购买逻辑
      console.log(`购买了商品: ${product.name}`);

      // 更新用户积分
      setUserPoints((prevPoints) => prevPoints - product.points);

      // 更新商品库存
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === product.id ? { ...p, stock: p.stock - 1 } : p
        )
      );

      showSnackbar(`成功购买${product.name}!`, "success");
    } else {
      showSnackbar("积分不足以购买此商品。", "error");
    }
  };

  useEffect(() => {
    // 这里可以放置获取商品数据的API调用
  }, []);

  // 处理添加商品事件
  const handleProductAdd = (newProductData) => {
    // 实现添加商品的逻辑或调用API
  };
  return (
    <>
      <section className="p-6">
        <AddProductModal onProductAdd={handleProductAdd} />
        <Typography variant="h6" sx={{ mt: 1 }}>
          您的积分: {userPoints}
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={6} sm={6} md={6}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    积分需求：{product.points}
                  </Typography>
                  {/* 库存显示只有当商品有库存时才显示 */}
                  <Typography variant="body2" color="textPrimary">
                    库存：{product.stock}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handlePurchase(product)}
                  >
                    购买
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>
      <Snackbar
        sx={{ width: "80%" }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        open={openSnackbar}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default StorePage;
