export class Problema {
    Id: number;
	Codigo: string;
	Descricao: string;
    Acoes_Corretivas: string;
    DataInicio: Date;
    Local: string;
    Turno: string;
    ReportadoPor: string;
    DataFim: Date;
    Estado: string;
    NC_Descricao: string;
    IdProdutoProcesso: string;
    NomeProdutoProcesso: string;
    Acoes_Executadas: string;
    Comentarios: [{
        Data: Date;
        UserLogin: string;
        Texto: string;
    }];
}
