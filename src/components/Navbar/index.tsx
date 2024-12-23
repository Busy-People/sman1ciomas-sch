import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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
                    <li className="font-bold hover:text-sky-700">
                        <Link href="/school-profile">
                            Profil Sekolah
                        </Link>
                    </li>
                    <li className="font-bold hover:text-sky-700">
                        <Link href="/news">
                            Berita
                        </Link>
                    </li>
                    <li className="font-bold hover:text-sky-700">
                        <Link href="/teachers">
                            Guru
                        </Link>
                    </li>
                    <li className="font-bold hover:text-sky-700">
                        <Link href="/students">
                            Siswa
                        </Link>
                    </li>
                    <li className="font-bold hover:text-sky-700">
                        <Link href="/history">
                            Sejarah
                        </Link>
                    </li>
               </ul>
            </nav>
        </>
    );
}