"use client"

import Link from "next/link"
import Image from "next/image"
import CustomButton from "./CustomButton"
import logoImage from "../public/assets/logoCar.png"


const Navbar = () => {
  return (
    <header className='w-full absolute top-0 left-0 z-10'>
        <nav className="max-width flex-between padding-x padding-y">
            <Link 
                href="/"
                className="flex-center flex-row gap-1"
            >
                <Image
                    src={logoImage}
                    width={50}
                    height={18}
                    alt="Logo"
                    className="object-contain"
                />
                <span className="hidden md:flex text-red-700 text-xl font-extrabold">
                    GetFast
                </span>
            </Link>

            <CustomButton 
                title="Sign In"
                btnType="button"
                containerStyles="text-red-700 rounded-full bg-white min-w-[130px] py-3 px-6"
            />
        </nav>  
    </header>
  )
}

export default Navbar