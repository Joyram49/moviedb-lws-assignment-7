import { sora } from "@/app/utils/fonts";
import "./globals.css";

export const metadata = {
  title: "page not found",
  description: "The page you are requesting is not found",
};

export default async function RootLayout({ children }) {
  return (
    <html className='dark'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
      </head>
      <body
        className={`${sora} dark:bg-body bg-white  dark:text-white text-dark`}
      >
        {children}
      </body>
    </html>
  );
}
