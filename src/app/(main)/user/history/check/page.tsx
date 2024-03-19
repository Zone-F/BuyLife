// // CheckInsHistory.js
"use client"

// CheckInsHistory.js
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

// 假设这是从后端API获取的数据
const checkIns = [
  { date: '2024-03-15', points: 5 },
  { date: '2024-03-16', points: 5 },
  { date: '2024-03-17', points: 10 },
];

export default function CheckInsHistory() {
  return (
    <List className="bg-white shadow rounded my-4">
      {checkIns.map((checkIn, index) => (
        <React.Fragment key={checkIn.date}>
          <ListItem>
            <ListItemText primary={`打卡日期：${checkIn.date}`} secondary={`获得积分：${checkIn.points}`} />
          </ListItem>
          {index !== checkIns.length - 1 && <Divider component="li" />}
        </React.Fragment>
      ))}
    </List>
  );
}
