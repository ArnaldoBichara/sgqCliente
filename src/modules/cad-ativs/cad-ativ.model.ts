import { NormaPadrao } from '../atividade/norma-padrao.model';
import { ProdutoProcesso } from '../atividade/produto-processo.model';

export class CadAtividade {
    codigo: string;
    descricao: string;
    usergroup: string;
    normaPadraoAssociada: NormaPadrao;
    produtoProcessoAssociado: ProdutoProcesso;
}
