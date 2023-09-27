import { Inter, Space_Grotesk } from "next/font/google";
import experinces from "@/experiences.json";
import Exp from "./Exp";
import { ArrowRight } from "lucide-react";

const inter = Inter({ weight: "700", subsets: ["latin"] });
const space_Grotesk = Space_Grotesk({
  weight: ["400", "500", "300"],
  subsets: ["latin"],
});
export default function Experiences() {
  return (
    <section id="EXPERIENCES" className="mt-10 text-[#cad6f6]">
      <h2
        className={`flex gap-1 mt-12 font-bold text-4xl text-[#cad6f6]  ${inter.className}`}
      >
        Experiences
      </h2>
      <div className={"${space_Grotesk.className} mt-10"}>
        {experinces.map((exp) => (
          <Exp key={exp.name} {...exp} />
        ))}
      </div>
      <a
        href=""
        className="flex font-light mt-5 gap-1 underline-offset-[6px] hover:underline hover:gap-3 transition-all hover:text-[#59e5c4] "
      >
        Feel free to review my professional Resume.{" "}
        <ArrowRight className="self-end scale-105 mt-[1px] " />{" "}
      </a>
    </section>
  );
}