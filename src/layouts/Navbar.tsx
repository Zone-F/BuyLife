"use client";
import Link from "next/link";

const Navbar = () => (
  <section className="border-b">
    <nav className="flex m-auto	 max-w-custom items-center justify-between py-6 px-4 border-gray-200">
      <div>
        <Link href="/">
          <span className="text-2xl font-bold text-black">BuyLife</span>
        </Link>
      </div>

      <div>
        <ul className="flex items-center space-x-4">
          <li className=" hover:text-purple-600 transition duration-200">
            <Link href="/about">市场</Link>
          </li>
          <li className=" hover:text-purple-600 transition duration-200">
            <Link href="/features">网站语言</Link>
          </li>
          <li className=" hover:text-purple-600 transition duration-200">
            {/* <Link href="/download">购买人生</Link> */}
            {/* <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
  Save changes
</button> */}
            <Link href="/buylife">
              <span className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-200">
                购买人生
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </section>
);

export default Navbar;
