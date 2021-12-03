
import { composeBundles } from 'redux-bundler'
import users from './users'

export default composeBundles(users);
export * from './UserActions'