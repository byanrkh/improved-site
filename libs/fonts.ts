import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'

const Grotesk = Space_Grotesk({
    display: 'auto',
    style: ['normal'],
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
})

const Mono = JetBrains_Mono({
    display: 'auto',
    style: ['normal'],
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export { Grotesk, Mono }