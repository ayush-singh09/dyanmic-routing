import React from 'react'

function About() {
  return (
    <div className="flex bg-zinc-800 h-[92%] p-10">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-3xl josefin bg-red-300 h-fit w-fit p-2">
          About Page
        </h1>
        <p className="text-xl bg-zinc-500 p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          placeat porro dolor ullam, tempore totam quae eveniet ad. Sapiente,
          voluptatibus repellendus nihil a provident vel harum amet, magni
          perspiciatis ratione asperiores nobis omnis mollitia quod quas numquam
          voluptate quasi reprehenderit voluptates eum ad voluptatum fugit
          accusantium repellat. Rem, quam nihil! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quis quae sequi iusto, tempore quo
          laudantium rerum nemo labore, illo dignissimos, voluptates provident
          aspernatur numquam? Modi ea asperiores velit porro fugit? Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Rem quisquam quae
          nostrum cum eos! Modi porro soluta nemo ducimus asperiores cum debitis
          quis recusandae dolores corrupti. Placeat sequi distinctio corporis.
        </p>
        <button className="font-bold text-3xl bg-zinc-300 text-black rounded-md h-fit w-fit p-2">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default About