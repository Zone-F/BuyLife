"use client";
// pages/points/check-in.tsx
import CheckList from "./CheckList";
import AddCheck from "./AddCheck";

function CheckInPage() {
  // 打卡逻辑，API调用等
  return (
    <div className="p-6">
      <AddCheck />
      <section className="mt-4">
        <CheckList />
      </section>
    </div>
  );
}
export default CheckInPage;
