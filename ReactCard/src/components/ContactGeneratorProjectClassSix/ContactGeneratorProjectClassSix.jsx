import React, { useState } from "react";

const ContactGeneratorProjectClassSix = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cardList, setCardList] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newCard = [...cardList];
    newCard.push({ username, email, phoneNumber });
    setCardList(newCard);
    setUsername("");
    setEmail("");
    setPhoneNumber("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-zinc-950">
      <div
        className="mainBody bg-zinc-900 text-zinc-100 font-bold text-4xl 
                      w-[400px] p-6 rounded-xl flex flex-col gap-6 
                      border border-zinc-800 shadow-lg"
      >
        <div className="text-center tracking-wide text-zinc-200">
          BatCard Generator
        </div>

        <div className="inputForm flex flex-col gap-4">
          <form onSubmit={onSubmitHandler}>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-zinc-700 bg-zinc-800 text-zinc-100 
                         rounded-md my-2 p-2 text-2xl 
                         placeholder-zinc-400 focus:outline-none 
                         focus:border-indigo-500"
              type="text"
              placeholder="Enter UserName"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-zinc-700 bg-zinc-800 text-zinc-100 
                         rounded-md my-2 p-2 text-2xl 
                         placeholder-zinc-400 focus:outline-none 
                         focus:border-indigo-500"
              type="text"
              placeholder="Enter Email"
            />

            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border border-zinc-700 bg-zinc-800 text-zinc-100 
                         rounded-md my-2 p-2 text-2xl 
                         placeholder-zinc-400 focus:outline-none 
                         focus:border-indigo-500"
              type="text"
              placeholder="Enter Phone Number"
            />

            <button
              className="text-xl border border-indigo-500 p-2 rounded-md 
                         bg-indigo-600 hover:bg-indigo-500 
                         transition-colors duration-200"
            >
              Submit
            </button>
          </form>

          <div className="newCardSection grid grid-cols-2 gap-4">
            {cardList.map((elem, idx) => (
              <div
                key={idx}
                className="div flex flex-col gap-3 border border-zinc-700 
                           rounded-lg p-3 text-center bg-zinc-800 
                           hover:border-indigo-500 transition-colors"
              >
                <h1 className="text-xs uppercase tracking-widest text-zinc-400">
                  Fighter No. {idx + 1}
                </h1>
                <h2 className="text-2xl text-zinc-100">{elem.username}</h2>
                <h2 className="text-lg text-zinc-300">{elem.phoneNumber}</h2>
                <h2 className="text-sm text-zinc-400">{elem.email}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactGeneratorProjectClassSix;
