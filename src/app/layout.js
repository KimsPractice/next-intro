import NavBar from "../../components/NavBar";

export const metadata = {
  title: {
    default: "Home | Next Movies",
    template: "%s | Next Movies",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
