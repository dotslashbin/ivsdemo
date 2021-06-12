import expressLoader from './express'
import cors from 'cors'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function (expressApp: any): Promise<any> {
	// CORS
	expressApp.use(cors())

	// Express
	await expressLoader({ app: expressApp })
}
