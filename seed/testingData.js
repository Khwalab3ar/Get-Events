const db = require('../db')
const {Event, Personal, Organization} = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB connection error : '))

const main = async () => {
  const events = [
    {
      name: 'Run for Days',
      industry: 'Fitness',
      type: 'public',
      price: 5,
      date: 07 / 22 / 2022
    }
  ]
  await Event.insertMany(events)
  console.log('Events created')
  const org = [
    {
      name: 'Terror Finder',
      industry: 'Entertainment'
    }
  ]
  await Organization.insertMany(org)
  console.log('Organizations created')
  const person = [
    {
      firstName: 'sara',
      lastName: 'smith',
      phone: '',
      email: 'ss@test.com'
    },
    {
      firstName: 'Bobbert',
      lastName: 'Johnson',
      phone: '',
      email: 'bj@test.com'
    }
  ]
  await Personal.insertMany(person)
  console.log('Personals created')
}

const run = async () => {
  await main()
  db.close()
}
run()
