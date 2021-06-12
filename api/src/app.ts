import express from 'express'

async function startServer() {
	const app = express()

	app.get('/', (req, res) => {
		console.log(req)
		const x = ['a', 'b', 'c']

		res.status(200)

		res.json(x)
	})

	app.listen(3000, () => {
		console.log('Running ... ')
	})
}

startServer()
