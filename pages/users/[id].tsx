import { useRouter } from "next/router";
import MainContainer from "../components/MainContainer";

export default function User({ user }) {
  const { back } = useRouter();

  return (
    <MainContainer>
      <div className="flex flex-col gap-2.5">
        <button
          onClick={() => back()}
          className="w-fit border p-1 py-0 rounded-lg text-amber-500 hover:text-black cursor-pointer transition"
        >
          Назад
        </button>
        <div>
          <div>
            <strong>Имя Фамилия:</strong> {user.name}
          </div>
          <div>
            <strong>Никнейм:</strong> {user.username}
          </div>
          <div>
            <strong>Почта: </strong>
            {user.email}
          </div>
          <div>
            <strong>Место проживания:</strong> {user.address.city},{" "}
            {user.address.street}, {user.address.suite}
          </div>
          <div>
            <strong>Место работы:</strong> {user.company.name}
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  return { props: { user } };
}
