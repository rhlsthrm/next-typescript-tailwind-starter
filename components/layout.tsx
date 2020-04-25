import { FC } from "react";
import Head from "next/head";

interface LayoutProps {
  title?: string;
}
export const Layout: FC<LayoutProps> = ({
  title = "Rahul Sethuram",
  children,
}) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div className="min-h-screen flex flex-col bg-zerodp">
      <main className="flex-grow">{children}</main>
    </div>
  </>
);