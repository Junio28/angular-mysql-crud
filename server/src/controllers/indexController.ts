import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        res.json({text: 'Estás en la página principal'});
    }

}

export const indexController = new IndexController;