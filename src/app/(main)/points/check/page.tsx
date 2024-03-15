"use client";
// pages/points/check-in.tsx
import React from "react";
import CheckList from "./CheckList";
import AddCheck from "./AddCheck";

function CheckInPage() {
  // 打卡逻辑，API调用等
  return (
    <div className="p-6">
      <AddCheck />
      <CheckList />
    </div>
  );
}
export default CheckInPage;
