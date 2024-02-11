import { Inter } from "next/font/google";
import "../globals.css";


export const metadata = {
  title: "Manage Account - Ghost Protocols",
  description: "Mange your account hastle-free.",
};

export default function AccountLayout({ children }) {
  return (
    <section>

      {children}
    </section>
  );
}
