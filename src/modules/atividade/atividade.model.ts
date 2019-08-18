export class Atividade {
	codigo: string;
    titulo: string;
    descricao: string;
    produtoProcessoAssociados: [{
        codigo: string;
        tipo: string;
    }];
    usergroup: string;
    normaPadraoAssociados: [{
        codigo: string;
        tipo: string;
    }];
}
