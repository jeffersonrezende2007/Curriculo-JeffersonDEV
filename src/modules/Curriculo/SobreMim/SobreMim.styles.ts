import tw from "tailwind-styled-components";

export const Container = tw.div`
  w-full
  min-h-screen
  py-16
  px-4
  sm:px-8
  md:px-12
  lg:px-16
  xl:px-24
  flex
  flex-col
  items-center
  text-white
`;

export const Title = tw.h1`
  text-4xl
  sm:text-5xl
  font-bold
  mb-12
  text-center
  bg-gradient-to-r
  from-blue-400
  to-purple-400
  bg-clip-text
  text-transparent
`;

export const Content = tw.div`
  w-full
  max-w-[1600px]
  mx-auto
  flex
  flex-col
  gap-6
  text-neutral-300
`;

export const Paragraph = tw.p`
  leading-relaxed
  text-lg
  animate-fadeIn
  max-w-5xl
  mx-auto
  w-full
  px-4
`;

/* 🔥 CAIXAS ESCURAS NO PADRÃO DO CONTATO */
export const HighlightBox = tw.div`
  bg-neutral-800/30
  backdrop-blur-xl
  border border-neutral-700/50
  rounded-3xl
  p-8 md:p-10
  shadow-xl shadow-black/20
  transition-all duration-300
  hover:scale-[1.02]
  hover:border-blue-500/40
  hover:bg-neutral-800/40
  w-full
  max-w-6xl
  mx-auto
`;

/* SKILLS TAGS COM O MESMO PADRÃO */
export const SkillsPreview = tw.div`
  flex flex-wrap
  gap-3
  justify-center
  max-w-4xl
  mx-auto
  mt-4
`;

export const SkillTag = tw.span`
  px-4 py-2
  bg-neutral-800/40
  backdrop-blur-xl
  border border-neutral-700/50
  rounded-full
  text-sm
  text-neutral-300
  flex items-center
  gap-2
  transition-all duration-300
  hover:scale-105
  hover:border-blue-500/40
  hover:bg-neutral-800/60
  shadow-md shadow-black/10
`;

/* TIMELINE / JORNADA */
export const JourneySection = tw.div`
  flex flex-col
  gap-6
  max-w-4xl
  mx-auto
  w-full
  mt-4
`;

export const JourneyItem = tw.div`
  flex flex-col sm:flex-row
  gap-4
  p-6
  bg-neutral-800/30
  backdrop-blur-xl
  border border-neutral-700/50
  rounded-2xl
  shadow-lg shadow-black/15
  transition-all duration-300
  hover:scale-[1.01]
  hover:border-blue-500/40
  hover:bg-neutral-800/40
`;

export const JourneyYear = tw.span`
  text-xl
  font-bold
  text-blue-400
  min-w-[140px]
`;

export const JourneyDescription = tw.p`
  text-base
  text-neutral-300
  leading-relaxed
`;

/* ESTATÍSTICAS */
export const StatsSection = tw.div`
  grid
  grid-cols-2 md:grid-cols-4
  gap-4 md:gap-6 lg:gap-8
  mt-16 mb-12
  w-full
  max-w-7xl
  mx-auto
  px-4
`;

export const StatCard = tw.div`
  bg-neutral-800/30
  backdrop-blur-xl
  border border-neutral-700/50
  rounded-2xl
  p-6 md:p-8
  text-center
  shadow-lg shadow-black/10
  transition-all duration-300
  hover:scale-105
  hover:border-blue-500/40
  hover:bg-neutral-800/40
`;

export const StatNumber = tw.div`
  text-2xl md:text-3xl lg:text-4xl
  font-bold
  bg-gradient-to-r from-blue-400 to-purple-400
  bg-clip-text text-transparent
`;

export const StatLabel = tw.div`
  text-sm md:text-base
  text-neutral-400
  mt-2
`;

/* CITAÇÃO / FRASE */
export const QuoteBox = tw.div`
  bg-neutral-800/30
  backdrop-blur-xl
  border border-neutral-700/50
  rounded-3xl
  p-10 md:p-12 lg:p-16
  text-center
  mt-8
  shadow-lg shadow-black/20
  animate-fadeIn
  max-w-6xl w-full mx-auto
`;