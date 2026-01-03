import Head from "next/head";
import LinkBase from "./link-base";
import { ReactNode } from "react";

interface IMainContainerProps {
  children: ReactNode;
  keywords?: string;
}

export default function MainContainer({
  children,
  keywords,
}: IMainContainerProps) {
  return (
    <>
      <Head>
        <meta keywords={"nextjs, user list" + keywords}></meta>
        <title>Main page - NextJS</title>
      </Head>
      <nav className="bg-amber-500 text-white font-semibold flex gap-2.5 hover:pointer  p-2 ">
        <LinkBase href="/" text="Главная" />
        <LinkBase href="/users" text="Пользователи" />
      </nav>
      <div className="p-2.5">{children}</div>
    </>
  );
}
