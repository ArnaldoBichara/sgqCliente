export class CadAtividade {
    codigo: string;
    descricao: string;
    usergroup: string;
    normaPadraoAssociada: NormaPadrao;
    produtoProcessoAssociado: ProdutoProcesso;
}
export class NormaPadrao {
    tipo: string;
    codigo: string;
    titulo: string;
}
export class ProdutoProcesso {
    tipo: string;
    codigo: string;
    nome: string;
}

