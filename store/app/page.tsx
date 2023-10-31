import Image from "next/image";
import Login from "./login/index";
import Update from "./update";
import Notice from "./notice";
import Logo from "./logo";

export default function Home() {
  return (
    <main className="flex flex-col justify-around w-full h-full min-w-[1300px] min-h-[800px] overflow-auto">
      <section className="flex justify-around">
        <section className="flex justify-center items-center">
          <Logo />
        </section>
        <section className="flex justify-center items-center ">
          <img src="" alt="image" className="w-[600px] h-[400px] bg-red-300" />
        </section>
      </section>
      <section className="flex justify-around items-center">
        <Login />
        <Update />
        <Notice />
      </section>
    </main>
  );
}
