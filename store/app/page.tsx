import Login from './login/index';
import Update from './update';
import Notice from './notice';
import Logo from './logo';

export default function Home() {
  return (
    <main className="flex h-full min-h-[800px] w-full min-w-[1300px] flex-col justify-around overflow-auto">
      <section className="flex justify-around">
        <section className="flex items-center justify-center">
          <Logo />
        </section>
        <section className="flex items-center justify-center ">
          <img src="" alt="image" className="h-[400px] w-[600px] bg-red-300" />
        </section>
      </section>
      <section className="flex items-center justify-around">
        <Login />
        <Update />
        <Notice />
      </section>
    </main>
  );
}
