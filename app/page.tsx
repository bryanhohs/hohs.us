import Image from "next/image";

export default function Home() {
  return (
    <div className="App">
      <video className='videoTag' autoPlay loop muted id="bg-video">
        <source src="/hd_1920_1080_30fps.mp4" type='video/mp4' />
      </video>
      <div className="flex justify-center align-center w-full items-center h-160 mx-auto">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image className="rounded-full" src="/profile.png" alt="Bryan C. Hohs" width={150} height={150} />
          <h1 className="text-center text-3xl font-[900] mt-5">Bryan C. Hohs</h1>
          <h3 className="text-center text-md font-normal mt-3">CEO, Tech, Entrepreneur</h3>
          <div className="text-sm pt-5">&copy; 2026 Bryan C. Hohs</div>
        </div>
      </div>
    </div>
  );
}
