"use client";
import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// 创建styled组件以应用自定义样式
const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

const ProfilePage = () => {
  // 假设这些数据从后端API获取
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    points: 0, // 当前积分
  });

  useEffect(() => {
    // 这里可以放置获取用户详细信息的API调用
  }, []);

  return (
    <Container sx={{ py: 6 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <CustomPaper elevation={3}>
            <Typography variant="h6" gutterBottom>
              {userInfo.username}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {userInfo.email}
            </Typography>
            <Typography variant="body1" gutterBottom>
              积分: {userInfo.points}
            </Typography>
          </CustomPaper>
          {/* <List component="nav" sx={{ mb: 2 }}>
            <Link href="/user/history/check" passHref>
              <CustomListItem>
                <ListItemText primary="打卡历史" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="go">
                    <ChevronRightIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </CustomListItem>
            </Link>
            <Divider />
            <Link href="/user/history/points" passHref>
              <CustomListItem>
                <ListItemText primary="积分历史" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="go">
                    <ChevronRightIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </CustomListItem>
            </Link>
          </List> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
