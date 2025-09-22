import { Request, Response } from 'express';

let cardData: any = null;

export const uploadCard = (req: Request, res: Response) => {
	cardData = req.body;
	res.json({ success: true });
};

export const getCard = (req: Request, res: Response) => {
	const { token } = req.query;

	if (!token) return res.status(401).json({ error: 'Unauthorized' });

	if (cardData) {
		res.json({ ...cardData });
	} else {
		res.status(404).json({ error: 'No card data' });
	}
};
