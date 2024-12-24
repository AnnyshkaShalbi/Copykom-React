import NavLinks from "./nav-links"
import Link from "next/link"

export default function Header() {
  return(
    <div className="p-4 bg-white w-full flex items-center  ">
      <Link href={'/'} key={'Home'}>
        <p className="text-red-950">Header</p>
      </Link>
      <NavLinks />
    </div>
  )
}