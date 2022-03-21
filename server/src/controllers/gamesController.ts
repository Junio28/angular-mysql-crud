import { Request, Response } from 'express';
import pool from '../database';

class GamesController {

    public index(req: Request, res: Response) {
        pool.query('DESCRIBE games');
        res.json('games');
    }

    public create(req: Request, res: Response){
        res.json({text:'Creando un Juego'});
    }

    public update(req: Request, res: Response){
        res.json({text:'Editando un Juego'});
    }

    public delete(req: Request, res: Response){
        res.json({text:'Eliminando un Juego'});
    }

}

export const gamesController = new GamesController();
export default gamesController;