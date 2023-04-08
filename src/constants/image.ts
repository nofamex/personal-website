export type Logo = {
  path: string;
  alt: string;
  width: number;
  height: number;
  href: string;
};

export const LOGO_DATA: Logo[] = [
  {
    path: "/logo/golang.png",
    alt: "Golang",
    width: 50,
    height: 50,
    href: "https://go.dev/",
  },
  {
    path: "/logo/rust.png",
    alt: "Rust",
    width: 65,
    height: 65,
    href: "https://www.rust-lang.org/",
  },
  {
    path: "/logo/typescript.png",
    alt: "Typescript",
    width: 65,
    height: 65,
    href: "https://www.typescriptlang.org/",
  },
  {
    path: "/logo/python.png",
    alt: "Python",
    width: 50,
    height: 50,
    href: "https://www.typescriptlang.org/",
  },
  {
    path: "/logo/java.png",
    alt: "Java",
    width: 65,
    height: 65,
    href: "https://www.java.com/en/",
  },
];
