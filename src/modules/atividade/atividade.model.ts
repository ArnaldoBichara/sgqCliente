export class Atividade {
    id: string;
    codigo: string;
    descricao: string;
    usergroup: string;
    normaPadrao: {
        tipo: string;
        codigo: string;
        titulo: string;
    };
    produtoProcessoAssociados: {
        tipo: string;
        codigo: string;
        nome: string;
    };
    workflowAssociado: {
        id: string;
        codigo: string;
        nome: string;
    };
    usuarioAtribuido: string; // em branco: nenhum usuário atribuído
    estado: string;           // aberto; fechado
    dataInicio: Date;
    dataFim: Date;
    produtoProcessoAnalisados: {
        tipo: string;
        codigo: string;
        nome: string;
        local: string;
        situacao: string; // conforme; nao conforme
        naoConformidade: string;
        comentario: string;
    };
}
