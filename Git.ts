var rl = require('readline-sync');
//criar a classe Repositório
export class Repositório {
    repositorio: [][] = []

    public guardarCommits(branche): void {

        this.repositorio.push(branche)
    }
}

export class Branches {
    branches: [][] = []
  

    public guardarCommits(Commit): void {
        let index = rl.questionInt('1 para proseguir - 2 para cancelar')
        if (1 === index) {
            this.branches.push(Commit)
        }
    }
    public head() {
        console.log(this.branches[this.branches.length - 1])
    }
    public guardarEmUmaRepositorio(repositorio: Repositório) {
        repositorio.guardarCommits(this.branches)
    }
}
export class Commits {
    commit: string[] = []
    historico: Array<any> = []

    public guardarBlob(Blob: string): void {
        this.commit.push(Blob)
    }
    public guardarEmUmaBranche(branch: Branches) {
        branch.guardarCommits(this.commit)
        this.historico.push(this.commit)
        
    }
}
export class Blob {
    blob: string

    public criarCod(): string {
        let codar = rl.question('digite o codigo')
        return codar
    }
    guardarEmUmCommit(commit: Commits) {
        commit.guardarBlob(this.criarCod())
    }
}

let Blobb = new Blob()
let commitss = new Commits()
let branchess = new Branches()
Blobb.guardarEmUmCommit(commitss)
commitss.guardarEmUmaBranche(branchess)
branchess.head()
console.log(commitss.commit)
console.log(branchess.branches)