import { Request, Response } from 'express';

export const signIn = (req: Request, res: Response) => {
	const { email, password } = req.body;
	if (email && password) {
		res.json({ token: 'dummy-token' });
	} else {
		res.status(400).json({ error: 'Invalid credentials' });
	}
};

export const signUp = (req: Request, res: Response) => {
	const { email, password, name, surname } = req.body;
	if (email && password && name && surname) {
		res.json({ token: 'dummy-token' });
	} else {
		res.status(400).json({ error: 'Missing fields' });
	}
};
