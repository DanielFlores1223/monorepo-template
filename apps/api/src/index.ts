import express, { Request, Response } from 'express';
import { ExampleResponse } from 'global-interfaces';
const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
	const response: ExampleResponse = {
		message: 'Hello MonoRepo Api',
		name: 'GET API ENDPOINT'
	};

	res.json({
		message: 'hello world MonoRepo :)',
		response
	});
});

app.listen(PORT, () => {
	console.log('server started at http://localhost:' + PORT);
});
