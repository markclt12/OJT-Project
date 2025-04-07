import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'item',
    icon: 'home',
    url: 'dashboards',
    role: ['Basic']
  },
  {
    id: 'driver',
    title: 'Driver',
    type: 'item',
    icon: 'users',
    url: 'members',
    role: ['Basic']
  },
  // {
  //   id: 'maintenance-log',
  //   title: 'Maintenance Log',
  //   type: 'item',
  //   icon: 'tool',
  //   url: 'maintenance-log',
  //   role: ['Basic']
  // },
  // {
  //   id: 'meter',
  //   title: 'Meter',
  //   type: 'item',
  //   icon: 'users',
  //   url: 'meters',
  //   role: ['Basic']
  // },
  
  // {
  //   id: 'drivers',
  //   title: 'Drivers',
  //   type: 'item',
  //   icon: 'users',
  //   url: 'driver',
  //   role: ['Basic']
  // },
  // {
  //   id: 'maintenance',
  //   title: 'Maintenances',
  //   type: 'item',
  //   icon: 'tool',
  //   url: 'maintenance',
  //   role: ['Basic']
  // }
]
