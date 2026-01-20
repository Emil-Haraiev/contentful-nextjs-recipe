'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/')
        }, 4000)

        return () => clearTimeout(timer)
    }, [router])

    return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
            <h1 className="text-5xl font-bold">404</h1>

            <p className="mt-4 text-gray-600">
                Oops, the page you are looking for does not exist.
            </p>

            <p className="mt-2 text-sm text-gray-500">
                You will be redirected to the homepage in a few seconds.
            </p>

            <Link
                href="/"
                className="mt-6 underline text-blue-600"
            >
                Go to homepage now
            </Link>
        </div>
    )
}
