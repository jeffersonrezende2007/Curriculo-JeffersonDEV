// src/modules/Curriculo/SobreMim/SobreMim.types.ts
export interface SobreMimProps {
  className?: string;
}

export interface Formacao {
  id: string;
  titulo: string;
  instituicao: string;
  periodo: string;
  status: string;
  descricao: string;
  imagem: string; // caminho da imagem na pasta public
  corDestaque: string;
  icone: string;
}