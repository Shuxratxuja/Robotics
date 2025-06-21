import Footer from "./components/Footer/Footer"
import Information from "./components/Header/Information"
import NavigationBar from "./components/Header/NavigationBar"
import Robot from "./components/Header/Robot"
import Statistic from "./components/Header/Statistic"
import Main from "./components/Main/Main"

function App() {

  return (
    <>
      <NavigationBar/>
      <Robot/>
      <div className="relative w-full h-[300px] md:h-[400px] sm:h-[300px] xs:h-[450px] bg-black flex items-center">
         <div className="z-10 container mx-auto max-w-7xl grid md:grid-cols-3 sm:grid-cols-3 xxs:grid-cols-1 xs:grid-cols-1 xs:w-full py-0 px-4 xs:gap-10 items-center justify-center gap-[10px] md:gap-6">
            <Statistic num='300' title='Довольных студентов'/>
            <Statistic num='25' title='Преподавателей'/>
            <Statistic num='60' title='групп'/>
        </div>
     </div>
     <div className="relative w-full bg-white py-[30px] px-[10px]">
      <Information/>
     </div>
     <div className="bg-[url('/Bg-img.png')] bg-cover bg-center bg-no-repeat min-h-screen bg-black">
      <Main/>
     </div>
     <footer className='bg-[#FFE000] py-8 '>
      <Footer/>
    </footer>
    </>
  )
}

export default App
