import InputBox from "@/components/InputBox/InputBox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-center items-center flex-col space-y-12">
        <div className="text-4xl max-w-lg flex flex-col items-center justify-center font-semibold font-poppins">
          <span>Challenge Your Knowledge,</span>
          <span className="block bg-gradient-to-r from-rose-500 to-red-500 bg-clip-text text-transparent">
            One Question at a Time!
          </span>
        </div>
        <div className="relative flex justify-center items-center flex-col space-y-8">
          {/* <div className="absolute w-[600px] h-[600px] 3xl:w-[700px] 3xl:h-[700px] bottom-[50px] bg-purple-200/[30%] -z-10 rounded-full blur-3xl" />
          <div className="absolute w-[600px] h-[600px] 3xl:w-[700px] 3xl:h-[700px] left-[0px] bg-green-200/[30%] -z-10 rounded-full blur-3xl" />
          <div className="absolute w-[600px] h-[600px] 3xl:w-[700px] 3xl:h-[700px] right-[0px] bg-red-200/[30%] -z-10 rounded-full blur-3xl" /> */}
          <InputBox />
        </div>
      </div>
    </main>
  );
}
