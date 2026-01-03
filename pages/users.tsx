import Link from "next/link";
import { useEffect, useState } from "react";
import MainContainer from "./components/MainContainer";

interface IGeo {
  lat: string;
  lng: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

export default function Users({ users }) {
  return (
    <MainContainer>
      <h1 className="font-bold mb-2.5">Список пользователей</h1>
      <div className="flex flex-col">
        {users.map(({ id, name }) => (
          <Link key={id} className="" href={`/users/${id}`}>
            {name}
          </Link>
        ))}
      </div>
    </MainContainer>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: { users },
  };
}
