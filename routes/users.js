import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => {
  res.send({ title: 'User router endpoint' });
});

userRouter.post('/', (req, res) => {
  res.send({ title: 'Creaste new user'});
});

userRouter.put('/:id', (req, res) => {
  res.send({ title: `Updated user ${req.params.id}`});
});

userRouter.delete('/:id', (req, res) => {
  res.send({ title: `Delete the user ${req.params.id}`});
});

export default userRouter;