import express from 'express'
import { VERSION } from '../config'
// import { SignUp } from '../handlers/Post'
import bodyParser from 'body-parser'

export default ({ app }: { app: express.Application }): void => {
	// Index -> shows version
	app.get('/', (request, response) => {
		response.status(200)
		response.json({ body: request.body, version: VERSION })
	})

	app.post(
		'/sign-up',
		bodyParser.urlencoded({ extended: true }),
		(request, response) => {
			console.log(request.body)

			response.status(200)
		}
	)
}
