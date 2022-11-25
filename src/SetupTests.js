import '@testing-library/jest-dom/extend-expect';
import { server } from './mocks/server'

beforeAll(() => server.listen({
  onUnhandledRequest: 'error'
}))
afterEach(() => server.listenHandlers())
afterAll(() => server.close())