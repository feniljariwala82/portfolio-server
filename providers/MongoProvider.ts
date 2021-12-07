import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { Mongoose } from 'mongoose'

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Your application is not ready when this file is loaded by the framework.
| Hence, the top level imports relying on the IoC container will not work.
| You must import them inside the life-cycle methods defined inside
| the provider class.
|
| @example:
|
| public async ready () {
|   const Database = this.app.container.resolveBinding('Adonis/Lucid/Database')
|   const Event = this.app.container.resolveBinding('Adonis/Core/Event')
|   Event.on('db:query', Database.prettyPrint)
| }
|
*/
export default class MongoProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
    // Create new Mongoose instance
    const mongoose = new Mongoose()

    // Connect the instance to DB
    mongoose.connect('mongodb://localhost/my_database', {})

    // Attach it to IOC container as singleton
    this.app.container.singleton('Mongoose', () => mongoose)
  }

  public async boot() {
    // All bindings are ready, feel free to use them
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
    // Going to take the Mongoose singleton from container
    // and call disconnect() on it
    // which tells Mongoose to gracefully disconnect from MongoBD server
    await this.app.container.use('Mongoose').disconnect()
  }
}
