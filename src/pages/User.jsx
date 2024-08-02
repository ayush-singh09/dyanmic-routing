import React from "react";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();

  const users = [
    {
      id: "1",
      username:"john-doe",
      name: "John Doe",
      age: "25",
    },
    {
      id: "2",
      username:"bob-smith",
      name: "Bob Smith",
      age: "35",
    },
    {
      id: "3",
      username:"alena-johnson",
      name: "Alena Johnson",
      age: "34",
    },
  ];    

  return (
    <div className="flex bg-zinc-800 h-[92%] p-10">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-3xl josefin bg-red-300 h-fit w-fit p-2 mb-5">
          User Page
        </h1>

        {users.map((user, index) => {
          return (
            <button
              onClick={() => navigate(`/user/${user.username}`)}
              key={index}
              className="bg-yellow-300 text-black p-3"
            >
              {user.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default User;
