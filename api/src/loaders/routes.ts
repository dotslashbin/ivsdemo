import express from 'express'
import { VERSION } from '../config'
import { GetAll, GetOne, SignUp } from '../handlers'

/**
 * Route definitions with references to handlers
 */
export default ({ app }: { app: express.Application }): void => {
	// Index -> shows version
	app.get('/', (request, response) => {
		response.status(200)
		response.json({ body: request.body, version: VERSION })
	})

	// GET
	app.get('/members', express.urlencoded({ extended: true }), GetAll)
	app.get('/members/:memberId', express.urlencoded({ extended: true }), GetOne)

	// POST
	app.post('/sign-up', express.json(), SignUp)
}
