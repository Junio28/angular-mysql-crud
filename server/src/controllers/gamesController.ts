import { Request, Response } from 'express';
import pool from '../database';

class GamesController {

    public list(req: Request, res: Response) {
        res.json({text:'Listando Juegos'});
    }

    public getOne(req: Request, res: Response) {
        res.json({text:'Este es el Juego '+ req.params.id});
    }

    public create(req: Request, res: Response){
        res.json({text:'Creando un Juego'});
    }

    public update(req: Request, res: Response){
        res.json({text:'Editando un Juego  '+ req.params.id});
    }

    public delete(req: Request, res: Response){
        res.json({text:'Eliminando un Juego '+ req.params.id});
    }

}

export const gamesController = new GamesController();
export default gamesController;