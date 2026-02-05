import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
    locales,
    defaultLocale: 'en',
    localePrefix: 'as-needed'
});

export const config = {
    matcher: ['/', '/(fr|en|de|es|zh|hi|ar|bn)/:path*']
};
