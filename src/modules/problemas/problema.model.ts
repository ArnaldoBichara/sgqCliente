export class Problema {
    id: string;
    codigo: string;
    descricao: string;
    // tslint:disable-next-line: variable-name
    acoes_Corretivas: string;
    dataInicio: Date;
    local: string;
    turno: string;
    quemReportou: string;
    dataFim: Date;
    estado: string; // fechado; aberto
    naoConformidade: string;
    tipoProdutoProcesso: string; // produto; processo
    nomeProdutoProcesso: string;
    // tslint:disable-next-line: variable-name
    acoes_Executadas: string;
    comentarios: [{
        data: Date;
        userLogin: string;
        texto: string;
    }];
}
