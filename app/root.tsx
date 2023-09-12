import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import styles from '~/styles/globals.css';
import { Button } from '@shadcn-ui/components';
import { useState } from 'react';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function App() {
    return (
        <html lang="en" className={theme}>
            <head>
                <Meta />
                <Links />
            </head>
            <body className="">
                <Button variant="default">Color</Button>
                <Button variant="destructive" onClick={handleChangeTheme}>
                    theme
                </Button>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
