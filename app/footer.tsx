import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black via-black to-transparent w-full mt-auto bottom-0 pb-5 pt-10 px-6 flex flex-row justify-between items-center flex-wrap gap-2">
      <span className="font-light text-xs mr-8">
        &copy; 2024 Shiyuan Liu. All Rights Reserved.
      </span>
      <span className="font-light text-xs leading-6 w-auto">
        <span>Developed by Shiyuan Liu with</span>
        <span className="inline-block">
          <Link href="https://nextjs.org">
            <Image
              className="inline-block pb-1 ml-2 drop-shadow-[0_0_0.3rem_#ffffff70] invert"
              src="/images/next.svg"
              alt="Next.js Logo"
              width={80}
              height={20}
              priority
            />
          </Link>
          <span> &</span>
          <Link href="https://tailwindcss.com">
            <Image
              className="inline-block pb-1 ml-2 drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/images/tailwindcss.svg"
              alt="Tailwind CSS Logo"
              width={140}
              height={20}
              priority
            />
          </Link>
        </span>
      </span>
    </footer>
  );
}
