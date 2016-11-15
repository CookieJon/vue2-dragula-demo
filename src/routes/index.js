import * as c from '../components'

export default [
  { path: '/', component: c.Home, name: 'home' },
  { path: '/global', component: c.GlobalService, name: 'global' },
  { path: '/named', component: c.NamedServices, name: 'named' }
]

