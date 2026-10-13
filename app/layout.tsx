import { createElement } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return createElement("html", { lang: "en" }, createElement("body", null, children));
}
