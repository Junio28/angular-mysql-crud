import { Request, Response } from 'express';
import pool from '../database';

class GamesController {

    public async list(req: Request, res: Response) {
        const games=  await pool.query('SELECT * FROM games');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id=?',[id]);
        console.log(games);
        res.json({message:'Juego Encontrado!!'});
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