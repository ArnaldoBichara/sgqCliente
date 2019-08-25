import { NormaPadrao } from '../atividade/norma-padrao.model';
import { ProdutoProcesso } from '../atividade/produto-processo.model';
import { InstProdutoProcesso } from '../atividade/instproduto-processo.model';
import { Workflow } from '../atividade/workflow.model';

export class Atividade {
    id: string;
    codigo: string;
    descricao: string;
    usergroup: string;
    normaPadraoAssociada: NormaPadrao;
    produtoProcessoAssociado: ProdutoProcesso;
    workflowAssociado: Workflow;
    usuarioAtribuido: string; // em branco: nenhum usuário atribuído
    estado: string;           // aberto; fechado
    dataInicio: Date;
    dataFim: Date;
    produtoProcessoAnalisados: InstProdutoProcesso;
}
