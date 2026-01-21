import Image from 'next/image'

type HeroProps = {
    title: string
    imageUrl: string
}

export default function Hero({ title, imageUrl }: HeroProps) {
    return (
        <section className="relative h-[360px] w-full">
            <Image
                src={imageUrl}
                alt={title}
                fill
                priority
                className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
                <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                    {title}
                </h1>
            </div>
        </section>
    )
}
