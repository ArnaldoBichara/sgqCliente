export class Problema {
    id: number;
	codigo: string;
	descricao: string;
    acoes_Corretivas: string;
    dataInicio: Date;
    atribuicao: string; // em branco: não atribuido ainda
    dataFim: Date;
    estado: string; // fechado; aberto
    comentarios: [{
        data: Date;
        userLogin: string;
        texto: string;
    }];
	// Completar isso aqui.
}
