import { CaretRight, Lightning } from "phosphor-react";
import Dropdown from "./Components/Dropdown";
import SkillComponent from "./Components/SkillComponent";
import CarouselComponent from "./Components/CarouselComponent";

import ReactImg from "./assets/react.svg";
import NodeImg from "./assets/node.svg";
import MysqlImg from "./assets/mysql.svg";
import PythonImg from "./assets/python.svg";
import GitImg from "./assets/git.svg";
import TailwindImg from "./assets/tailwind.svg";

import GithubImg from "./assets/github.svg";
import LinkedinImg from "./assets/linkedin.svg";
import FooterImg from "./assets/footer.svg";

import "../src/styles/index.css";
import DarkModeToggle from "./Components/DarkModeToggle";

import { useLanguage } from "./contexts/Language";
import LanguageToggle from "./Components/LanguageToggle";

export default function App() {    
const { texts } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 overflow-hidden transition-colors duration-200">
      <header className="flex justify-between items-center mx-4 sm:mx-8 md:mx-24 min-h-24">
        <div className="flex items-center">
          <Lightning size={18} weight="fill" color="#FACC15" />
          <p className="text-xl font-medium ml-2">S. Silva</p>
        </div>
        <div className="flex items-center gap-4 sm:ml-11">
          <DarkModeToggle/>
          <LanguageToggle /> 
          <Dropdown />
        </div>
      </header>
      <section className="flex flex-col items-center text-center mx-4 sm:mx-8 md:mx-20 px-4 sm:px-8 md:px-12 py-8 sm:py-10 gap-6 rounded-3xl shadow-2xl shadow-blue-400 dark:shadow-red-500 bg-gradient-to-b from-indigo-800 to-blue-500 dark:from-red-900 dark:to-rose-500">
        <p className="text-3xl sm:text-4xl text-gray-200">
          {texts.greeting}
        </p>
        <p className="text-3xl sm:text-5xl text-gray-200 font-medium">
          {texts.description}{" "}
          <span className="text-yellow-400">{texts.descriptionIdeas}</span> {texts.descriptionText}
        </p>
        <div className="flex gap-4 mt-4">
          <div className="flex justify-center items-center h-8 w-24 rounded-2xl text-slate-100 bg-black cursor-pointer">
            <a href="https://wa.me/5511982955188" className="cursor-pointer">
              {texts.contact}
            </a>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <a
              href="/Lucas-Santos/CVLucas_Santos.pdf"
              download="CVLucas_Santos.pdf"
            >
              Download CV
            </a>
            <CaretRight size={18} weight="bold" />
          </div>
        </div>
      </section>
      <div className="flex justify-center place-items-center mt-14">
        <p className="font-medium text-3xl sm:text-4xl md:text-5xl">
          {texts.latestProjects}
        </p>
      </div>
      <div className="flex justify-center place-items-center py-6 sm:py-10 px-4 sm:px-8 md:px-24">
        <CarouselComponent />
      </div>
      <section className="text-center sm:text-left mx-4 sm:mx-8 md:mx-24 mt-8 mb-4">
        <p className="text-3xl sm:text-4xl md:text-5xl font-medium">
           {texts.aboutMe}
        </p>
      </section>
      <div className="flex flex-col md:flex-row justify-between px-4 sm:px-8 md:px-24 gap-4 ">
        <div className="flex flex-row h-fit gap-4">
          <div className="flex min-w-1 bg-black dark:bg-gray-300" />
          <p className="text-left">
            {texts.aboutText}
            <br />
            {texts.aboutText2}
            <br />
            {texts.aboutText3}
            <br />
            <br />
            {texts.aboutText4}
            <br />
            {texts.aboutText5}
            <br />{texts.aboutText6}
          </p>
        </div>
        <div className="flex flex-col w-fit md:mt-20 gap-4 mb-12 sm:flex self-center">
          <p className="text-3xl sm:text-4xl md:text-5xl font-medium">{texts.skills}</p>
          <div className="flex gap-14">
            <SkillComponent
              image={PythonImg}
              tech={"Python"}
              bgColor={"bg-sky-900"}
              ShadowColor={"shadow-sky-900"}
            />
            <SkillComponent
              image={ReactImg}
              tech={"React"}
              bgColor={"bg-sky-400"}
              ShadowColor={"shadow-sky-400"}
            />
            <SkillComponent
              image={NodeImg}
              tech={"Node.js"}
              bgColor={"bg-lime-400"}
              ShadowColor={"shadow-lime-400"}
            />
          </div>
          <div className="flex gap-14">
            <SkillComponent
              image={MysqlImg}
              tech={"MySQL"}
              bgColor={"bg-cyan-950"}
              ShadowColor={"shadow-cyan-950"}
            />
            <SkillComponent
              image={GitImg}
              tech={"Git"}
              bgColor={"bg-amber-100"}
              ShadowColor={"shadow-amber-200"}
            />
            <SkillComponent
              image={TailwindImg}
              tech={"Tailwind"}
              bgColor={"bg-sky-100"}
              ShadowColor={"shadow-sky-200"}
            />
          </div>
        </div>
      </div>

      <footer className="flex flex-col md:flex-row justify-between h-auto md:h-96 min-w-screen px-4 sm:px-8 md:px-24 py-8 sm:py-12 md:py-16 rounded-t-3xl bg-gradient-to-r from-blue-800 via-blue-500  dark:from-red-600 ">
        <div className="flex flex-col gap-2">
          <p className="text-3xl sm:text-4xl md:text-5xl text-white">
                {texts.haveAn}
            <br />
                {texts.idea}
          </p>
          <p className="text-base sm:text-xl text-white">
            {texts.footerSubtitle}
          </p>
          <div className="w-fit border-b border-white py-1">
            <a href="mailto:LucasSantos3005@proton.me">
              <p className="text-base sm:text-xl font-medium cursor-pointer text-white">
                LucasSantos3005@proton.me
              </p>
            </a>
          </div>
          <div className="flex gap-4 mt-2 items-center">
            <a
              href="https://github.com/Lucasslva/Lucas-Santos"
              className="flex p-2 rounded-lg bg-white cursor-pointer"
            >
              <img src={GithubImg} alt="Github" loading="lazy" />
            </a>
            <a
              href="https://linkedin.com/in/Lucas-S-Silva0001"
              className="cursor-pointer"
            >
              <img src={LinkedinImg} alt="LinkedIn" loading="lazy" />
            </a>
          </div>
        </div>
        <div className="flex justify-end">
          <img className="mt-2" src={FooterImg} alt="Footer" loading="lazy" />
        </div>
      </footer>
    </div>
  );
}
