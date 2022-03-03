import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";

import styles from "./app.css";

export const meta: MetaFunction = () => {
	return { title: "Agência Canivete" };
};

export const links: LinksFunction = () => {
	return [
		{
			rel: "stylesheet",
			href: styles,
		},
	];
};

export default function App() {
	return (
		<html lang="pt-br">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1"
				/>
				<meta
					name="facebook-domain-verification"
					content="hfizy8m197mvb0xer36kv2hnekle0f"
				/>
				<Meta />
				<Links />
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WQMBCJV');`,
					}}
				></script>
			</head>
			<body>
				<noscript>
					<iframe
						title="gtag"
						src="https://www.googletagmanager.com/ns.html?id=GTM-WQMBCJV"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					></iframe>
				</noscript>

				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
