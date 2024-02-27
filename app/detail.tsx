import Image from "next/image";

export default function Detail() {
  return (
    <section className="min-h-screen max-w-[1200px] m-auto">
      <div className="flex flex-row items-center justify-between">
        <div className="relative mt-10 h-60 w-60 overflow-hidden rounded-full select-none">
          <Image
            src="/images/portrait.jpg"
            alt="profile pic"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-xl ml-16 w-[70%] mt-16">
          Hey there! I'm Shiyuan and welcome to my cozy nest!
          I am a student and software developer, hoping to use my power to make an impact to the world around me.<br/>

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
      <Divider />
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
    <hr className="w-full divide-solid rounded-full my-8 border-t-2 border-t-white/60" />
  )
}
