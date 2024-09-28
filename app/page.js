import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Main Section */}
      <div className="flex justify-center flex-col gap-6 items-center text-white h-[60vh] bg-gradient-to-br from-blue-600 to-purple-500">
        <div className="font-bold flex gap-3 text-6xl justify-center items-center"> 
          Buy Me A Coffee 
          <span><img src="/tea.gif" width={100} alt="Tea icon" className="ml-2 transition-transform duration-300 hover:scale-110" /></span>
        </div>
        <p className="text-lg max-w-lg text-center">
          A crowdfunding platform for Developers. Get funded by your fans and followers. Start now!
        </p>
        <div className="flex gap-4">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-lg px-6 py-3 text-center transition-transform duration-300 hover:scale-105">
            Start here
          </button>

          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-lg px-6 py-3 text-center transition-transform duration-300 hover:scale-105">
            Read more
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-white h-2 opacity-15"></div>

      {/* Your Fans Can Buy You a Coffee Section */}
      <div className="text-white container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Your Fans Can Buy You a Coffee</h2>
        <div className="flex gap-8 justify-around">
          {[
            { gif: "/piggybank.gif", title: "Fans want to help", desc: "Your fans are available to help you." },
            { gif: "/coins.gif", title: "Support from fans", desc: "Receive donations from your supporters." },
            { gif: "/coins-network.gif", title: "Build a network", desc: "Grow your following and get funded." }
          ].map((item, index) => (
            <div key={index} className="space-y-4 flex flex-col items-center justify-center text-center">
              <img className="bg-slate-400 rounded-full p-4 text-black transition-transform duration-300 hover:scale-110" src={item.gif} width={100} alt={`${item.title} GIF`} />
              <p className="font-bold text-lg">{item.title}</p>
              <p className="text-sm max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>

          {/* Divider */}
        <div className="bg-white h-1 opacity-10 mt-16"></div>
      </div>

      {/* Learn More Section */}
      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-12">Learn More About Us</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/voF1plqqZJA?si=MGOqU3hsQRw3bJ7v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </>
  );
}
