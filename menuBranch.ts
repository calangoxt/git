import { Branch } from "./Branch";
import { BranchDevelop } from "./Branch";
import { BranchFuture } from "./Branch";
import { BranchHotfix } from "./Branch";
import { BranchMaster } from "./Branch";
import { BranchRelese } from "./Branch";
var rl = require('readline-sync');
let arrayBranch: Branch[] = []
function criarPrincipal() {
    console.log('crie a branch principal');
    let nome = rl.question('nome da class')
    let data = rl.question('data da class')
    let branch = new Branch(nome, data)
    return branch
}

function criarMaster() {
    console.log('crie a branch master');
    let nome2 = rl.question('nome da class')
    let data2 = rl.question('data da class')
    let branch2 = new BranchMaster(nome2, data2)
    arrayBranch.push(branch2)
}

while (true) {
    console.log('1 - criar branch master ');

    let menu = rl.questionInt('menu')
    switch (menu) {
        case 1:
            arrayBranch.push(criarPrincipal())
    }
}