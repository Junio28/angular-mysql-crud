import { Request, Response } from 'express';
import pool from '../database';

class GamesController {

    public async list(req: Request, res: Response) {
        const games=  await pool.query('SELECT * FROM games');
        res.json(games);
    }

    public getOne(req: Request, res: Response) {
        res.json({text:'Este es el Juego '+ req.params.id});
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({message:'Juego Creado!!'});
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