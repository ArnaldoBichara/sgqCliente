export class CadAtividade {
    codigo: string;
    descricao: string;
    usergroup: string;
    normapadrao: {
        tipo: string;
        codigo: string;
        titulo: string;
    };
    produtoProcessoAssociado: {
        tipo: string;
        codigo: string;
        nome: string;
    };
}
