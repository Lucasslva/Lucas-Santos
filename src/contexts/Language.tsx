import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define os idiomas disponíveis
type Language = "pt" | "en" | "es";

interface LanguageTexts {
  greeting: string;
  description: string;
  descriptionIdeas: string;
  descriptionText:string;
  contact: string;
  downloadCV: string;
  latestProjects: string;
  aboutMe: string;
  aboutText: string;
  aboutText2: string;
  aboutText3: string;
  aboutText4: string;
  aboutText5: string;
  aboutText6: string;
  skills: string;
  haveAn: string;
  idea: string;
  footerSubtitle: string;
}

const languages: Record<Language, LanguageTexts> = {
  pt: {
    greeting: "Olá, eu sou o Lucas!",
    description:"Me dedico a transformar",
    descriptionIdeas: "ideias",
    descriptionText: "criativas em soluções que contribuem para um mundo melhor. Explore meu portfólio para ver como faço isso acontecer.",
    contact: "Contato",
    downloadCV: "Download CV",
    latestProjects: "Últimos Projetos",
    aboutMe: "Sobre Mim",
    aboutText: "Sou um programador de 24 anos, com três anos de experiência em desenvolvimento de software, especializando-me em Python e Typescript.",
    aboutText2: "Tenho um histórico comprovado na entrega de projetos",
    aboutText3: "de alta qualidade que atendem ou superam as expectativas.",
    aboutText4: "Fiz este portfólio para detalhar a minha jornada e mostrar que com foco,", 
    aboutText5: "criatividade e um crescimento exponencial do conhecimento,",
    aboutText6: "é possível fazer tudo com a programação.",
    skills: "Skills",
    haveAn: "Tem alguma", 
    idea: "ideia?",
    footerSubtitle: "Vamos construí-la juntos!",
  },
  en: {
    greeting: "Hi, I'm Lucas!",
    description:"I dedicate myself to transforming creative",
    descriptionIdeas: "ideas",
    descriptionText: "into solutions that contribute to a better world. Explore my portfolio to see how I make it happen.",
    contact: "Contact",
    downloadCV: "Download CV",
    latestProjects: "Latest Projects",
    aboutMe: "About Me",
    aboutText: "I'm a 24-year-old developer with three years of software development experience, specializing in Python and Typescript.",
    aboutText2: "I have a proven track record of delivering high-quality projects",
    aboutText3: "that meet or exceed expectations.",
    aboutText4: "I created this portfolio to detail my journey and show that with focus,",
    aboutText5: "creativity, and exponential knowledge growth,",
    aboutText6: "anything is possible with programming.",
    skills: "Skills",
    haveAn: "Got an", 
    idea: "idea?",
    footerSubtitle: "Let's build it together!",
  },
  es: {
    greeting: "¡Hola, soy Lucas!",
    description:"Me dedico a transformar",
    descriptionIdeas: "ideas",
    descriptionText: "creativas en soluciones que contribuyan a un mundo mejor. Explora mi portafolio para ver cómo lo hago realidad.",
    contact: "Contacto",
    downloadCV: "Descargar CV",
    latestProjects: "Últimos Proyectos",
    aboutMe: "Sobre Mí",
    aboutText: "Soy un programador de 24 años, con tres años de experiencia en desarrollo de software, especializado en Python y Typescript.",
    aboutText2: "Tengo un historial comprobado de entregar proyectos",
    aboutText3: "de alta calidad que cumplen o superan las expectativas.",
    aboutText4: "Hice este portafolio para detallar mi trayectoria y mostrar que con enfoque,", 
    aboutText5: "creatividad y un crecimiento exponencial del conocimiento,",
    aboutText6:  "todo es posible con la programación.",
    skills: "Habilidades",
    haveAn: "¿Tienes una",
    idea: "idea?",
    footerSubtitle: "¡Construyámosla juntos!",
  },
};

interface LanguageContextType {
  lang: Language;
  texts: LanguageTexts;
  changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [lang, setLang] = useState<Language>(
    (localStorage.getItem("lang") as Language) || "pt"
  );

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, texts: languages[lang], changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
