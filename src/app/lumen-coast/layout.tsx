import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'x Lumen Coast',
	description: 'didn\'t have the actual image or video used, but check this out.',
	openGraph: {
        title: 'x Lumen Coast',
        description: 'didn\'t have the actual image or video used, but check this out.',
        url: 'https://x-ui-to-code.vercel.app/lumen-coast',
        siteName: 'x Lumen Coast',
        // images: [
        //   {
        //     url: 'https://x-ui-to-code.vercel.app/_next/image?url=%2FScreenshot%202025-08-14%20at%2013.01.29.png&w=1080&q=75',
        //     width: 1200,
        //     height: 630,
        //     alt: 'x Lumen Coast',
        //   },
        // ],
        type: 'website',
	},
}

export default function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			{children}
		</div>
	)
}
