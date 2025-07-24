import Card from "../components/Card";
import { useRef } from "react";
import { Globe } from "../components/globe";
import { Frameworks } from "../components/Frameworks";
import CopyEmailButton from "../components/CopyEmailBtn";
 
const About = () => {
    const grid2Container = useRef();
  return (
    <section className="c-space section-spacing gap-2">
    <h2 className="text-heading">About</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
    {/* Grid 1*/}
    <div className="flex flex-col justify-end grid-default-color grid-1 relative overflow-hidden p-4">
    <div className="relative w-full h-full">
    <img src="assets/photo.png"
    className="absolute inset-0 w-full h-full object-cover"
    />
    </div>  
      <div className="z-10 mt-auto text-left ">
    <p className="headtext"> Hi, I'm Marjorie P. Matilos</p>
    <p className="subtext">
        I developed my UI/UX and frontend dev skills to deliver dynamic and responsive software and web applications.
    </p>
    </div>
    <div className="absolute inset-x-0 pointer-events-none-bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
    </div>
     {/* Grid 2*/}
    <div className= "grid-default-color grid-2 ">
    <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
    </div>    
    </div>
    {/* Grid 3*/}
    <div className= "grid-default-color grid-3 ">
      <div className="z-10 w-[50%]">
      <p className="headtext">Time Zone</p>
      <p className="subtext">
        I am currently based in Cebu and undergoing my On-the-Job Training (OJT) at Ferret9 Creative Solutions.
      </p>
      </div>
    <figure className="absolute left-[30%] top-[10%]">
    <Globe />
    </figure>
    </div>
    {/* Grid 4*/}
    <div className= "grid-default-color grid-4 ">
      <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
    </div>
    {/* Grid 5*/}
    <div className= "grid-default-color grid-5 ">
      <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools taht
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
    </div>
    </div>
    </section>
  )
}
 
export default About