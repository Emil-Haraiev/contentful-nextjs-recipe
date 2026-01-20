import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-yellow-300">
            <div className="mx-auto flex max-w-7xl  h-50 flex-col items-center justify-between gap-6  md:flex-row">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/icons/logo.svg"
                        alt="Delícias à Mesa"
                        width={28}
                        height={28}
                    />
                    <span className="text-2xl mt-1 font-semibold">
                        Delícias à Mesa
                    </span>
                </Link>
                <div className="flex items-center gap-4">
                    <span className="text-l font-medium">
                        Redes sociais:
                    </span>

                    <div className="flex items-center gap-3">
                        <a
                            href="#"
                            aria-label="YouTube"
                            className="rounded-full bg-yellow-100 p-2 transition hover:scale-110"
                        >
                            <Image
                                src="/icons/youtube.svg"
                                alt=""
                                width={18}
                                height={18}
                            />
                        </a>
                        <a
                            href="#"
                            aria-label="Twitter"
                            className="rounded-full bg-yellow-100 p-2 transition hover:scale-110"
                        >
                            <Image
                                src="/icons/twitter.svg"
                                alt=""
                                width={18}
                                height={18}
                            />
                        </a>

                        <a
                            href="#"
                            aria-label="Vector"
                            className="rounded-full bg-yellow-100  p-2 transition hover:scale-110"
                        >
                            <Image
                                src="/icons/vector.svg"
                                alt=""
                                width={18}
                                height={18}
                            />
                        </a>

                        <a
                            href="#"
                            aria-label="Pinterest"
                            className="rounded-full bg-yellow-100 p-2 transition hover:scale-110"
                        >
                            <Image
                                src="/icons/pinterest.svg"
                                alt=""
                                width={18}
                                height={18}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
