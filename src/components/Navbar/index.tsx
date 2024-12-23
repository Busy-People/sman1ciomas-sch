"use client"


import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useEffect } from "react";
export default function Navbar() {
    const pathname = usePathname();

    return (
        <>
            <nav className="flex items-center justify-between bg-white shadow-lg p-5 text-neutral-600">
                <div className="flex gap-2">
                    <div>
                        <Image src="/assets/logo.jpeg" alt="logo" width={50} height={50} className="rounded-full"></Image>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">SMAN 1 Ciomas</h1>
                        <p className="text-xs">Sekolah Menenengah Atas Negeri 1 Ciomas Bogor</p>
                    </div>
                </div>
                <ul className="flex gap-5">
                    <li className={`${pathname === "/" && "text-sky-700 underline decoration-sky-600"} font-bold hover:text-sky-700`}>
                        <Link href="/">
                            Beranda
                        </Link>
                    </li>
                    <li className={`${pathname === "/news" && "text-sky-700 underline decoration-sky-600"} font-bold hover:text-sky-700`}>
                        <Link href="/news">
                            Berita
                        </Link>
                    </li>
                    <li className={`${pathname === "/teachers" && "text-sky-700 underline decoration-sky-600"} font-bold hover:text-sky-700`}>
                        <Link href="/teachers">
                            Guru
                        </Link>
                    </li>
                    <li className={`${pathname === "/students" && "text-sky-700 underline decoration-sky-600"} font-bold hover:text-sky-700`}>
                        <Link href="/students">
                            Siswa
                        </Link>
                    </li>
                    <li className={`${pathname === "/history" && "text-sky-700 underline decoration-sky-600"} font-bold hover:text-sky-700`}>
                        <Link href="/history">
                            Sejarah
                        </Link>
                    </li>
               </ul>
            </nav>
        </>
    );
}