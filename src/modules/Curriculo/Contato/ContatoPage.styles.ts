// src/modules/Curriculo/Contato/ContatoPage.styles.ts

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
  justify-center
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

export const ContentWrapper = tw.div`
  flex flex-col lg:flex-row
  gap-12 lg:gap-16 xl:gap-24
  w-full max-w-7xl mx-auto
  items-stretch
`;

/* Coluna da esquerda - Agradecimento e informações */
export const LeftColumn = tw.div`
  w-full lg:w-1/2 flex flex-col gap-8 justify-center
  flex-1 h-full
`;

export const ThankYouCard = tw.div`
  h-full
  bg-neutral-800/30 backdrop-blur-xl
  border border-neutral-700/50
  rounded-3xl
  p-8 md:p-10
  shadow-xl shadow-black/20
`;

export const Greeting = tw.h2`
  text-3xl
  md:text-4xl
  font-bold
  bg-gradient-to-r
  from-blue-400
  to-purple-400
  bg-clip-text
  text-transparent
  mb-4
`;

export const ThankYouText = tw.p`
  text-lg
  md:text-xl
  text-neutral-300
  leading-relaxed
  mb-6
`;

export const ContactInfo = tw.div`
  flex
  flex-col
  gap-4
  mt-6
`;

export const ContactItem = tw.div`
  flex
  items-center
  gap-4
  p-4
  bg-neutral-800/30
  backdrop-blur-sm
  border
  border-neutral-700/50
  rounded-xl
  hover:border-blue-500/50
  hover:bg-neutral-800/40
  transition-all
  duration-300
`;

export const ContactIcon = tw.div`
  text-2xl
  text-blue-400
`;

export const ContactText = tw.div`
  flex
  flex-col
`;

export const ContactLabel = tw.span`
  text-sm
  text-neutral-400
`;

export const ContactValue = tw.span`
  text-base
  md:text-lg
  text-white
  font-medium
`;

export const SocialLinks = tw.div`
  flex
  gap-4
  mt-6
`;

export const SocialLink = tw.a`
  p-4
  bg-neutral-800/30
  backdrop-blur-sm
  border
  border-neutral-700/50
  rounded-xl
  text-blue-400
  hover:text-white
  hover:border-blue-500
  hover:bg-blue-500/10
  hover:scale-110
  transition-all
  duration-300
  flex
  items-center
  justify-center
`;

/* Coluna da direita - Formulário */
export const RightColumn = tw.div`
  w-full lg:w-1/2 flex flex-col
  flex-1 h-full
`;

export const FormCard = tw.div`
  h-full
  bg-neutral-800/30 backdrop-blur-sm
  border border-neutral-700/50
  rounded-3xl
  p-8 md:p-10
  shadow-xl shadow-black/20
`;

export const FormTitle = tw.h3`
  text-2xl
  md:text-3xl
  font-bold
  bg-gradient-to-r
  from-blue-400
  to-purple-400
  bg-clip-text
  text-transparent
  mb-6
`;

export const Form = tw.form`
  flex
  flex-col
  gap-6
`;

export const InputGroup = tw.div`
  flex
  flex-col
  gap-2
`;

export const Label = tw.label`
  text-sm
  text-neutral-400
  font-medium
`;

export const Input = tw.input`
  w-full
  p-4
  rounded-xl
  bg-neutral-800/50
  border
  border-neutral-700
  text-white
  placeholder-neutral-500
  focus:border-blue-400
  focus:outline-none
  focus:bg-neutral-800/80
  transition-all
  duration-300
`;

export const TextArea = tw.textarea`
  w-full
  p-4
  h-32
  rounded-xl
  bg-neutral-800/50
  border
  border-neutral-700
  text-white
  placeholder-neutral-500
  focus:border-blue-400
  focus:outline-none
  focus:bg-neutral-800/80
  transition-all
  duration-300
  resize-none
`;

export const Button = tw.button`
  w-full
  py-4
  px-6
  rounded-xl
  bg-gradient-to-r
  from-blue-600
  to-purple-600
  text-white
  font-semibold
  text-lg
  shadow-lg
  shadow-blue-600/25
  hover:shadow-xl
  hover:shadow-blue-600/40
  hover:scale-105
  hover:from-blue-500
  hover:to-purple-500
  transition-all
  duration-300
  flex
  items-center
  justify-center
  gap-2
  cursor-pointer
  border
  border-transparent
  hover:border-blue-400/50
`;

export const SuccessMessage = tw.div`
  bg-gradient-to-r
  from-green-500/20
  to-emerald-500/20
  border
  border-green-500/30
  rounded-2xl
  p-8
  text-center
  text-green-300
  w-full
  max-w-lg
  mx-auto
  animate-fadeIn
  backdrop-blur-sm
`;

export const ErrorMessage = tw.div`
  bg-gradient-to-r
  from-red-500/20
  to-pink-500/20
  border
  border-red-500/30
  rounded-xl
  p-4
  text-center
  text-red-300
  animate-fadeIn
  backdrop-blur-sm
`;