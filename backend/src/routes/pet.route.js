import { Router } from 'express'
import formMiddleware from '../middlewares/form.middleware.js';
import { editForm, fetchForm, formDelete, formSubmit, setAdopt, singlePet } from '../controllers/pet.controller.js';
import { authIDMiddleware, authMiddleware } from '../middlewares/checkMiddleware.js';

const rootRoute = Router();


rootRoute.get('/fetch', fetchForm)
rootRoute.post('/form', formMiddleware, formSubmit)
rootRoute.delete('/form', authMiddleware, formDelete)
rootRoute.get('/:id', authIDMiddleware, singlePet)
rootRoute.patch('/:id', authIDMiddleware, setAdopt)
rootRoute.put('/:id', authIDMiddleware, editForm)

export default rootRoute