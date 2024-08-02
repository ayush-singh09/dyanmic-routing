import React from 'react'
import { useParams } from 'react-router-dom';

function UserInfo() {

    const { username } = useParams();

    return <div className="flex bg-zinc-800 h-[92%] p-10">{ username }</div>;
}

export default UserInfo