import expressLoader from './routes'
import cors from 'cors'
import helmet from 'helmet'
import { RunAuthentication } from '../middlewares/Authentication'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function (expressApp: any): Promise<any> {
	expressApp.use(cors())
	expressApp.use(helmet())
	expressApp.use('/members', RunAuthentication)

	// Express
	await expressLoader({ app: expressApp })
}
