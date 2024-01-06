import Link from "next/link"

export default function Page() {
  return (
    <main className="grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className=" flex gap-1">Heres the available Resumes</h1>
      <Link href={"/resumes/1"}>Resume 1</Link>
      <Link href={"/resumes/2"}>Resume 2</Link>
      <Link href={"/resumes/3"}>Resume 3</Link>
    </main>
  )
}
