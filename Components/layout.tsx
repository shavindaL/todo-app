import Head from "next/head";
import Footer from "./footer";

export default function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="This is a solution to the Todo app challenge on Frontend Mentor" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon-32x32.png" />
            </Head>
            <div className="w-screen h-screen font-josefin">
                {children}
                <Footer />
            </div>
        </>
    )
}