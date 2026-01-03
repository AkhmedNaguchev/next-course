import Link from "next/link";

export default function Error() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-800 text-white text-balance ">
      <h1>
        Упс... Такой страницы не существует,
        <br /> но вы можете вернуться на{" "}
        <span className="text-blue-400">
          <Link className="underline" href="/">
            Главную
          </Link>
        </span>
      </h1>
    </div>
  );
}
