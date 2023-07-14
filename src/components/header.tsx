import Image from "next/image"

export function Header(){
  return(
    <header className="flex flex-row justify-between font-alt p-12">

    <Image src="/logo.svg" alt="Fylo" width={176} height={72} />

    <div className="flex flex-row gap-10">
      <a href="" className="hover:decoration-solid hover:font-bold transition duration-300">Features</a>
      <a href="" className="hover:decoration-solid hover:font-bold transition duration-300">Team</a>
      <a href="" className="hover:decoration-solid hover:font-bold transition duration-300">Sign In</a>
    </div>

  </header>
  )
  
}