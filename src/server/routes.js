import * as express from 'express';
import DB from './db';
import cors from 'cors'


const router = express.Router();

// router.use(cors());

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/mike', async (req,res) => {
    try {
        let mike = await DB.Mike.all();
        res.json(mike);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

)

export default router;