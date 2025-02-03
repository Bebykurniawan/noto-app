import Header from "./components/Header"

function App() {
  return (
    <>
<div className="relative h-screen w-screen bg-black overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Radial Gradient Glow + Animasi */}
      <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] glow"></div>

      {/* Content Area */}
      <div className="relative z-10 container mx-auto">
        <Header /> {/* Komponen Header */}
        {/* Bisa juga tambahin komponen lainnya di sini */}
      </div>
    </div>
    </>
  )
}

export default App
