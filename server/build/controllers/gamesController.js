"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesController = void 0;
class GamesController {
    index(req, res) {
        res.json({ text: 'Estás en /api/games' });
    }
}
exports.gamesController = new GamesController();
exports.default = exports.gamesController;
