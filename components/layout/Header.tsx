import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header className="border-b ">
            <div className="h-7.5 w-full bg-yellow-300" />
            <div className="mx-auto flex h-27.5 max-w-7xl items-center justify-between px-4 bg-white">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/icons/logo.svg"
                        alt="Delícias à Mesa"
                        width={28}
                        height={28}
                    />
                    <span className="text-lg mt-1 font-regular">
                        Delícias à Mesa
                    </span>
                </Link>
                <nav className="hidden gap-8 text-xl font-bold md:flex">
                    <Link href="/" className="hover:text-yellow-500">
                        Home
                    </Link>
                    <Link href="/recipes" className="hover:text-yellow-500">
                        Receitas
                    </Link>
                    <Link href="/about" className="hover:text-yellow-500">
                        Sobre nos
                    </Link>
                </nav>
                <div className="relative w-56">
                    <Image
                        src="/icons/search.svg"
                        alt="Search"
                        width={16}
                        height={16}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
                    />

                    <input
                        type="text"
                        placeholder="Pesquisar"
                        className="w-full rounded-full border py-2 pl-9 pr-4 text-sm
                       focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                </div>

            </div>
        </header>
    )
}
