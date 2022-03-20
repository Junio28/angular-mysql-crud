import { Request, Response } from 'express';

class GamesController {

    public index(req: Request, res: Response) {
        res.json({text: 'Estás en /api/games'});
    }

}

export const gamesController = new GamesController();
export default gamesController;