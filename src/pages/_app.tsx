import RootLayout from '@/layouts/layout'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    )
}
