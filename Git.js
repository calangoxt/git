"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blob = exports.Commits = exports.Branches = void 0;
var rl = require('readline-sync');
var Branches = /** @class */ (function () {
    function Branches() {
        this.branches = [];
    }
    Branches.prototype.guardarCommits = function (Commit) {
        var index = rl.questionInt('1 para proseguir - 2 para cancelar');
        if (1 === index) {
            this.branches.push(Commit);
        }
    };
    Branches.prototype.head = function () {
        console.log(this.branches[this.branches.length - 1]);
    };
    return Branches;
}());
exports.Branches = Branches;
var Commits = /** @class */ (function () {
    function Commits() {
        this.commit = [];
    }
    Commits.prototype.guardarBlob = function (Blob) {
        this.commit.push(Blob);
    };
    Commits.prototype.guardarEmUmaBranche = function () {
        Branchess.guardarCommits(this.commit);
    };
    return Commits;
}());
exports.Commits = Commits;
var Blob = /** @class */ (function () {
    function Blob() {
    }
    Blob.prototype.criarCod = function () {
        var codar = rl.question('digite o codigo');
        return codar;
    };
    Blob.prototype.guardarEmUmCommit = function (commit) {
        commit.guardarBlob(this.criarCod());
    };
    return Blob;
}());
exports.Blob = Blob;
var Blobb = new Blob();
var commitss = new Commits();
var Branchess = new Branches();
Blobb.guardarEmUmCommit(commitss);
commitss.guardarEmUmaBranche();
Branchess.head();
console.log(commitss.commit);
console.log(Branchess.branches);
