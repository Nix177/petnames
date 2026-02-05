import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'Metadata' });
    return {
        title: t('title'),
        description: t('description'),
        alternates: {
            canonical: `https://petnames.one/${locale === 'en' ? '' : locale + '/'}`,
            languages: {
                'en': 'https://petnames.one/',
                'fr': 'https://petnames.one/fr/',
                'de': 'https://petnames.one/de/',
                'es': 'https://petnames.one/es/',
                'zh': 'https://petnames.one/zh/',
                'hi': 'https://petnames.one/hi/',
                'ar': 'https://petnames.one/ar/',
                'bn': 'https://petnames.one/bn/',
            }
        }
    };
}

export default async function RootLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages();

    return (
        <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <head>
                <Script
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9411950027978678"
                    crossOrigin="anonymous"
                    strategy="lazyOnload"
                />
            </head>
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
