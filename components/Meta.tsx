import React from 'react'
import Head from 'next/head'
import { GA_TRACKING_ID } from '../lib/gtag'

const Meta = ({ title, keywords, description }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="language" content="en" />

                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicons/Union.svg" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/favicons/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>

                <meta property="og:url" content="http://thedefi.network/" />
                <meta property="og:title" content="The DeFi Network — We build digital products & apps on the blockchain." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/shared_link_preview.png" />
                <meta property="og:description" content="The DeFi Network — We build digital products & apps on the blockchain." />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="http://thedefi.network/" />
                <meta property="twitter:title" content="The DeFi Network" />
                <meta property="twitter:description" content="The DeFi Network — We build digital products & apps on the blockchain." />
                <meta property="twitter:image" content="/shared_link_preview.png" />


                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                     window.dataLayer = window.dataLayer || [];
                     function gtag(){dataLayer.push(arguments);}
                     gtag('js', new Date());
                     gtag('config', '${GA_TRACKING_ID}', {
                     page_path: window.location.pathname,
                     });
                        `,
                    }}
                />
            </Head>
        </div>
    )
}

Meta.defaultProps = {
    title: 'The DeFi Network',
    keywords: 'blockchain, defi, finance, bitcoin, etherium, web3, developers, blockchain developers, coders, coding, aave, binance',
    description: "We’re The DeFi Network. We build digital products & apps on the blockchain. The DeFi Network is a global blockchain product team."
}


export default Meta
