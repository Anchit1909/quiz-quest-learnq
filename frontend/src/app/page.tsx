import InputBox from "@/components/InputBox/InputBox";
import Footer from "@/components/Navigation/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-center items-center flex-col space-y-12 mb-36">
        <div className="text-4xl max-w-lg flex flex-col items-center justify-center font-semibold font-poppins">
          <span>Challenge Your Knowledge,</span>
          <span className="block bg-gradient-to-r from-rose-500 to-red-500 bg-clip-text text-transparent">
            One Question at a Time!
          </span>
        </div>
        <div className="relative flex justify-center items-center flex-col space-y-8">
          <InputBox />
        </div>
      </div>
      <Footer />
    </main>
  );
}
