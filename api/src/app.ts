import express from 'express'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'

// eslint-disable-next-line @typescript-eslint/no-var-requires
dotenv.config()

async function startServer() {
	const app = express()

	// eslint-disable-next-line @typescript-eslint/no-var-requires
	await require('./loaders').default(app)

	app
		.listen(process.env.PORT, () => {
			// eslint-disable-next-line no-console
			console.log(`The server is running on port ${process.env.PORT}`)
		})
		.on('error', (error) => {
			// eslint-disable-next-line no-console
			console.error(`Express failed: ${error}`)
		})
}

function startDatabase() {
	mongoose.connect('mongodb://localhost:27017/ivsdemo')
}

startDatabase()
startServer()
