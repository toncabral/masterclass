import express from 'express'

import routes from './routes'

// eslint-disable-next-line no-unused-vars
import connection from './database'

class App {
    public express: express.Application

    constructor () {
      this.express = express()

      this.middleware()
      this.routes()
    }

    private middleware (): void {
      this.express.use(express.json())
    }

    private database (): void {

    }

    private routes (): void {
      this.express.use(routes)
    }
}

export default new App().express
