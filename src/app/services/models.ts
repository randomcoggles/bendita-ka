export interface IDish {
  id?: number;
  preco: number;
  nome: string;
  descricao?: string;
  composicao: string[];
  entregaEm?: string;
  Observacao?: string;
  tipoPrato?: string;
  secao?: string; 
}
