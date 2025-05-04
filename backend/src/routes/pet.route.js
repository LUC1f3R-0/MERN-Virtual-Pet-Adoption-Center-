import { Router } from 'express'
import { editForm, fetchConMood, fetchForm, formDelete, formSubmit, setAdopt, singlePet } from '../controllers/pet.controller.js';
import { authIDMiddleware, authMiddleware, fetchMood, formMiddleware } from '../middlewares/pet.middleware.js';

const rootRoute = Router();


rootRoute.get('/fetch', fetchForm)
rootRoute.post('/form', formMiddleware, formSubmit)
rootRoute.post('/filter', fetchMood, fetchConMood)
rootRoute.delete('/form', authMiddleware, formDelete)
rootRoute.get('/:id', authIDMiddleware, singlePet)
rootRoute.patch('/:id', authIDMiddleware, setAdopt)
rootRoute.put('/:id', authIDMiddleware, editForm)

export default rootRoute