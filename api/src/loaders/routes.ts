import express from 'express'
import { VERSION } from '../config'
import { GetAll, GetOne, SignUp } from '../handlers'

export default ({ app }: { app: express.Application }): void => {
	// Index -> shows version
	app.get('/', (request, response) => {
		response.status(200)
		response.json({ body: request.body, version: VERSION })
	})

	// GET
	app.get('/members', GetAll)
	app.get('/members/:text', GetOne)

	// POST
	app.post('/sign-up', express.urlencoded({ extended: true }), SignUp)
}
