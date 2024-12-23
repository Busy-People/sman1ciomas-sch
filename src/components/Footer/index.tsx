import { IoMdCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="fixed w-full bottom-0 bg-gradient-to-r from-sky-600 to-sky-800 p-5 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
                    <div>
                        <h1 className="font-semibold text-md">SMAN 1 Ciomas</h1>
                        <p className="text-sm">Sekolah Menenengah Atas Negeri 1 Ciomas Bogor</p>
                    </div>
                    <div>
                        <h1 className="font-semibold text-md">Kontak</h1>
                        <ul>
                            <li className="flex items-center gap-2">
                                <IoMdCall /> 
                                <span> +6281234567890</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope /> 
                                <span>sman1ciomas@sch.id</span>
                            </li>
                            <li>
                                <span className="text-sm">Alamat: Jl. Raya Ciomas Cibinong, Sukaharja, Kec. Ciomas, Kabupaten Bogor, Jawa Barat 16610</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-semibold text-md">Layanan</h1>
                        <ul>
                            <li>Siswa</li>
                            <li>Orangtua</li>
                            <li>Sekolah</li>
                            <li>Guru</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-semibold text-md">Informasi</h1>
                        <ul>
                            <li>Kebijakan Privasi</li>
                            <li>Syarat & Ketentuan</li>
                            <li>Karir</li>
                            <li>Tentang Kami</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-semibold text-md">Ikuti Kami</h1>
                        <ul className="text-sm">
                            <li>Instagram</li>
                            <li>Telegram</li>
                            <li>X</li>
                            <li>Facebook</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}