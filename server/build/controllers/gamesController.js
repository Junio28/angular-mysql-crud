"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesController = void 0;
class GamesController {
    list(req, res) {
        res.json({ text: 'Listando Juegos' });
    }
    getOne(req, res) {
        res.json({ text: 'Este es el Juego ' + req.params.id });
    }
    create(req, res) {
        res.json({ text: 'Creando un Juego' });
    }
    update(req, res) {
        res.json({ text: 'Editando un Juego  ' + req.params.id });
    }
    delete(req, res) {
        res.json({ text: 'Eliminando un Juego ' + req.params.id });
    }
}
exports.gamesController = new GamesController();
exports.default = exports.gamesController;
