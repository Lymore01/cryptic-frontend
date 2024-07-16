/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import AuthLayout from "./AuthLayout";
import toast from "react-hot-toast";

const CreateKeys = () => {
  const [wordInputs, setWordInputs] = useState(Array(12).fill(""));

  const authData: string | null = localStorage.getItem("cryptAuth");

  const user: string = authData !== null ? JSON.parse(authData) : "";

  useEffect(()=>{
    console.log(user)
  }, [user])

  const handleInputChange = (index: number, value: string) => {
    const newWordInputs = [...wordInputs];
    newWordInputs[index] = value;
    setWordInputs(newWordInputs);
  };



  const handleContinue = async () => {
    try {
      const res = await fetch(`/api/user/generate-assign-keys`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId:user, 
          phrase: wordInputs.join(" ") as string,
        }),
      });

      if(!user){
        console.log("error")
      }

      if (!res.ok) {
        toast.error("Error generating yor key");
        console.log("Error generating key");
        return;
      }

      const result = await res.json();

      toast.success(result?.message);

      window.location.href = "/home/overview";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout title="Create private key 🐱‍👤">
      <div className="px-4 flex-1 gap-[20px] flex flex-col">
        <span className="text-sm text-[gray]/60">
          For each text box enter random words to create a 12 word phrase to
          generate you key.
        </span>
        <div className="flex flex-col gap-[30px] w-full h-[320px] overflow-y-scroll">
          {[...Array(12).keys()].map((number) => (
            <WordField
              key={number}
              num={number + 1}
              value={wordInputs[number]}
              onChange={(value) => handleInputChange(number, value)}
            />
          ))}
        </div>
        <div
          onClick={handleContinue}
          className="transition-all ease-in-out w-full h-[50px] md:h-[60px] p-4 bg-secondary items-center justify-center cursor-pointer rounded-lg flex hover:bg-[#ff9500]"
        >
          <span className="font-semibold capitalize">Continue</span>
        </div>
      </div>
    </AuthLayout>
  );
};

export default CreateKeys;

export type WordFieldProp = {
  num: number;
  value: string;
  onChange: (value: string) => void;
};

const WordField = ({ num, value, onChange }: WordFieldProp) => {
  const handleChange = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-row gap-[10px]">
      <span>{num}.</span>
      <input
        id={`word-${num}`}
        name={`word-${num}`}
        type="text"
        autoComplete="off"
        className="outline-none px-2 w-full bg-[transparent] h-auto placeholder:text-[gray]/60 border border-[transparent] border-b-[grey]/20"
        placeholder={`word ${num}`}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
