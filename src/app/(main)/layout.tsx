import Link from "next/link";
import style from "./layout.module.scss";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=" bg-gray w-full min-h-screen relative">
      <nav className="absolute top-0 left-0 flex m-auto	 max-w-custom items-center justify-between py-6 px-4 border-gray-200">
        <div>
          <Link href="/">
            <span className="text-2xl font-bold text-black">BuyLife</span>
          </Link>
        </div>
      </nav>
      <main className={`m-auto max-w-main p-10 h-screen`}>
        <div className={style.container}>{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
