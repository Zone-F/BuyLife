"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";

export function BottomNav() {
  const pathname = usePathname();
  const [value, setValue] = useState(pathname); // 初始值设为当前的路径名

  useEffect(() => {
    setValue(pathname); // 每次页面重载时设置当前路径为选中值
  }, [pathname]); // 依赖项设置为 pathname

  // 创建一个导航项配置的数组
  const navigationItems = [
    { label: "打卡", value: "/points/check", icon: <CheckCircleIcon />, href: "/points/check" },
    { label: "商店", value: "/store", icon: <StoreIcon />, href: "/store" },
    { label: "个人", value: "/user", icon: <PersonIcon />, href: "/user" },
  ];

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation value={value} showLabels>
        {navigationItems.map((item) => (
          <BottomNavigationAction
            key={item.value}
            label={item.label}
            value={item.value}
            icon={item.icon}
            component={Link}
            href={item.href}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}