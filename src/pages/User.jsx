import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([])

  const navigate = useNavigate();

  const getData = async () => {
    const data = await fetch("https://fakestoreapi.in/api/users");
    const user = await data.json();
    setUsers(user.users);
    setFiltered(user.users);
  };

  const handleSearch = (search) => {
    const newData = users.filter((prev) => {
      return prev.name.firstname.toLowerCase().includes(search.toLowerCase());
    })
    setFiltered(newData)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex bg-zinc-800 min-h-[92%] p-10">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-3xl josefin bg-red-300 h-fit w-fit p-2 mb-5">
          User Page
        </h1>

        <div className="flex gap-3">
          <input
            onChange={(e) => {
              handleSearch(e.target.value);
              console.log(e.target.value);
            }}
            className="bg-transparent border rounded p-1 px-2 outline-none"
            placeholder="Search Here"
            type="text"
          />
        </div>

        <div className="flex gap-5">
          <div className="h-[300px] w-[200px] flex flex-col overflow-y-scroll gap-2 bg-purple-400 p-2">
            {filtered?.map((user, index) => {
              return (
                <button
                  onClick={() => navigate(`/user/${user.username}`)}
                  key={index}
                  className="bg-yellow-300 text-black p-3"
                >
                  {user.name.firstname}
                </button>
              );
            })}
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default User;
