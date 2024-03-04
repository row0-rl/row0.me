import Image from "next/image";
import React from "react";

interface BlogProps {
  imgFileName: string;
  flip: boolean;
  children: React.ReactNode;
}

const Blog: React.FC<BlogProps> = ({imgFileName, flip=false, children}: BlogProps) => {
  return flip ? (
    <section className="flex flex-row justify-between my-12">
        <div className="relative w-[40%] h-80 overflow-hidden rounded-3xl">
          <Image
            src={"/images/blog/" + imgFileName}
            alt={imgFileName}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-[55%]">
          {children}
        </div>
    </section>
    ) : (
    <section className="flex flex-row justify-between my-12">
      <div className="w-[55%]">
        {children}
      </div>
      <div className="relative w-[40%] h-80 overflow-hidden rounded-3xl">
        <Image
          src={"/images/blog/" + imgFileName}
          alt={imgFileName}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );


}

export default Blog;