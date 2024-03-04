import Image from "next/image";
import Link from "next/link";
import {Envelope, GithubLogo, InstagramLogo, LinkedinLogo} from "@phosphor-icons/react";
import {Blob} from "next/dist/compiled/@edge-runtime/primitives";
import Blog from "@/app/blog";

export default function Detail() {
  return (
    <section className="min-h-screen max-w-[1200px] m-auto">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col items-center">
          <div className="relative mt-10 h-60 w-60 overflow-hidden rounded-full select-none">
            <Image
              src="/images/portrait.jpg"
              alt="profile pic"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-row space-x-2 mt-6">
            <a href="mailto: row0@outlook.com">
              <Envelope size={42} weight="duotone"/>
            </a>
            <a href="https://www.linkedin.com/in/liu-shiyuan/" target="_blank">
              <LinkedinLogo size={40} weight="duotone"/>
            </a>
            <a href="https://github.com/row0-rl" target="_blank">
              <GithubLogo size={38} weight="duotone"/>
            </a>
          </div>
        </div>
        <div className="text-xl ml-16 w-[70%] mt-12">
          <p>Hey there! I&#39;m Shiyuan and welcome to my cozy nest!
            I am a student and software developer, hoping to use my power to make an impact to the world around me.</p>

          <div className="group inline-block pb-0">
            <div className="text-sm italic underline pt-4 cursor-pointer inline-block text-white/70">
              How to pronounce my name?
            </div>
            <div
              className="inline-block opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:ease-in-out duration-300 text-sm whitespace-nowrap ml-2 px-3 py-3 shadow-lg border-dotted border-white/10 border-2 rounded-2xl bg-gray-600/60 select-text">
              Pronounced as <b>shh-yoo-an leo</b>
            </div>
          </div>
        </div>
      </div>
      <Divider/>
      {/*<div className="flex flex-row items-center justify-around">*/}
      {/*  <div className="w-[2px] bg-gradient-to-b from-transparent via-gray-700 to-transparent h-40 block mx-auto"></div>*/}
      {/*  <div className="w-[65%] flex flex-row justify-around">*/}
      {/*    <Image*/}
      {/*      src="/images/illinois_logo_fullcolor_rgb.png"*/}
      {/*      alt="UIUC Logo"*/}
      {/*      width={50}*/}
      {/*      height={50}*/}
      {/*      style={{*/}
      {/*        objectFit: "contain"*/}
      {/*      }}*/}
      {/*    />*/}
      {/*    <div className="leading-8">*/}
      {/*      <p className="font-bold text-xl leading-10">University of Illinois Urbana-Champaign (UIUC)</p>*/}
      {/*      <p>B.S. in Information Sciences + Data Science</p>*/}
      {/*      <p>Aug 2022 - Dec 2024 (expected)</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<Divider/>*/}
      <div className="font-bold text-2xl">Recent Experiences</div>

      <Blog imgFileName="huawei.jpg">
        <div className="flex flex-row justify-between items-end">
          <div className="text-xl">Intern Software Developer @ Huawei</div>
          <div className="text-right text-sm text-white/50">June 2023-Aug 2023</div>
        </div>
        <div className="pt-2 text-sm font-light text-white/90">
          <p>
            The intern experience at Huawei in my first college year was definitely one of the most
            valuable experiences of my life. I was lucky enough to have the freedom to work on a
            <span className="text-blue-300"> full-stack web platform</span> for an algorithm competition,
            and was awarded the <span className="text-blue-300"> Outstanding Intern Award</span>.
            Steps I took to develop the platform include:
          </p>
          <ul className="list-disc pl-6 space-y-2 pt-2">
            <li>
              Built the game server using <span className="text-blue-300">Golang/Gin</span>, deployed in Ubuntu and
              optimized runtime for Golang, Python,
              C++, and Rust.
              Established a CI/CD pipeline using <span className="text-blue-300">Jenkins</span> for competitor algorithm
              integration.
            </li>
            <li>
              Implemented a <span className="text-blue-300">REST API</span> using <span
              className="text-blue-300">Flask</span>.
              Built the front-end platform with HTML, jQuery, and Socket.IO, designed user interface, and styled with
              CSS.
            </li>
            <li>Designed <span className="text-blue-300">MySQL database</span> architecture. Implemented authentication
              seamlessly integrated with Huawei
              SSO.
            </li>
          </ul>
        </div>

      </Blog>

      <Blog imgFileName="vmware.jpg">
        <div className="flex flex-row justify-between items-end">
          <div>Intern Student @ VMware</div>
          <div className="text-right text-sm text-white/50">June 2022-Aug 2022</div>
        </div>
        <p className="pt-2 text-sm font-light text-white/90">
          VMware i4good vInternship Program
        </p>
      </Blog>

      <Blog imgFileName="frc.jpg">
        <div className="flex flex-row justify-between items-end">
          <div>FIRST Robotics Competition Team 6394</div>
          <div className="text-right text-sm text-white/50">Sep 2019-Now</div>
        </div>

        <p className="pt-2 text-sm font-light text-white/90">

        </p>
      </Blog>
      {/* <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div> */}
    </section>
  );
}

function Divider() {
  return (
    // <hr className="w-full divide-solid rounded-full my-8 border-t-2 border-t-white/60"/>
    <div className="w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent h-[2px] block my-5"/>

  )
}
