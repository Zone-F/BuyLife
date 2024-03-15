import Image from "next/image";
// import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "@/layouts/Navbar"; // 假设在'components'文件夹下有Navbar组件
import styles from "@/app/(index)/page.module.scss";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* <section className="max-w-custom mx-auto p-4"> */}
        <div className="max-w-custom mx-auto p-4 bt-14 mt-24 	">
          <h1 className="font-bold mb-4 text-center leading-tight text-6xl">
            赋能每一天的成长，让
            <br /><span className={styles.gradientText}>坚持</span>变为可见的价值
          </h1>
          <p className="text-xl text-center mt-6">
          BuyLife — 不只是打卡和积分，这是重新定义你的生活方式的序幕。
          <br/>每一次的坚持，都转化为积分，让你在积分商店中购买你的人生。
          </p>
        </div>
      </main>
    </>
  );
}
