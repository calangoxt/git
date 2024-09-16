var rl = require('readline-sync');
export class Branch {
    public nome: string
    public dataCriacao: Date
    public commits: string[] = []
    public branchPai: Branch
    public historico: string[] = []
    constructor(nome: string, dataCriacao: Date) {
        this.nome = nome
        this.dataCriacao = dataCriacao
    }
    public criarCommits(): void {
        let commitar = rl.question('fala baixo negui?')
        this.commits.push(commitar)
        this.historico.push(commitar)
    }
    public merge(outraBranch: Branch): void {
        this.commits.concat(outraBranch.commits)
    }
    public checkout(branches: Branch[], nomeBranch: string): Branch {
        let branchEncontrada = branches.find(b => b.nome == nomeBranch)
        if (branchEncontrada) {
            return branchEncontrada
        } else {
            return this
        }
    }
}
export class BranchMaster extends Branch {
    public criarBranchMaster(): void {
        let nome = rl.question('fala baixo negui nome')
        let data = rl.question('fala negui data')
        let novaBranch = new BranchMaster(nome, data)
    }
    public criarBranchDevelop(): Branch {
        let nome = rl.question('fala baixo negui nome')
        let data = rl.question('fala negui data')
        let novaBranch = new BranchDevelop(nome, data)
        return novaBranch
    }
    public criarBranchHotFix(): Branch {
        let nome = rl.question('fala baixo negui nome')
        let data = rl.question('fala negui data')
        let novaBranch = new BranchHotfix(nome, data)
        return novaBranch
    }
    public criarBranchFuture(): Branch {
        let nome = rl.question('fala baixo negui nome')
        let data = rl.question('fala negui data')
        let novaBranch = new BranchFuture(nome, data)
        return novaBranch
    }
    public criarBranchRelese(): Branch {
        let nome = rl.question('fala baixo negui nome')
        let data = rl.question('fala negui data')
        let novaBranch = new BranchRelese(nome, data)
        return novaBranch
    }
}
export class BranchDevelop extends Branch {
    public finalizarSprint(): void {
        let novoCommit = this.commits
        console.log(novoCommit)
    }
}
export class BranchHotfix extends Branch {
    public corrigirBug(): void {
        this.criarCommits
    }
}
export class BranchFuture extends Branch {
    public implementarFuncionalidade(): void {
        this.commits
    }
}
export class BranchRelese extends Branch {
    promoverParaProducao(outraBranch: BranchMaster): void {
        outraBranch.commits.concat(this.commits)
    }
}