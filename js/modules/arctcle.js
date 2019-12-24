"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = __importDefault(require("./db"));
var Article = /** @class */ (function () {
    function Article() {
    }
    return Article;
}());
exports.Article = Article;
var ArticleModule = new db_1.default();
exports.ArticleModule = ArticleModule;
