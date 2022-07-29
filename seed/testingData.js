const db = require('../db')
const { Event, Personal, Organization } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB connection error : '))

const main = async () => {
  const events = [
    {
      name: 'Halloween Run',
      industry: 'Fitness',
      type: 'public',
      price: 5,
      date: 07 / 22 / 2022,
      image:
        'https://2.bp.blogspot.com/-3JHP11JWt9U/WB48_e-zCgI/AAAAAAAAcgg/0-99Z83ws3kOkn75fp9Ct5BTe57Qo28GgCLcB/s1600/0-Halloween%2Bpumpkins%2B2009%2B.jpg',
      organization: '62e332b34810b59314687e64'
    }
    /*
    {
      name: 'Run for Days',
      industry: 'Medical',
      type: 'public',
      price: 5,
      date: 07 / 22 / 2022,
      image: 'https://live.staticflickr.com/2923/14364296927_e9a3db8685_b.jpg',
      organization: '62e1f4e4202550c04df95077'
    },
    {
      name: 'Cherry-Palooza',
      industry: 'Food',
      type: 'public',
      price: 5,
      date: 07 / 22 / 2022,
      image:
        'https://orig00.deviantart.net/7ba3/f/2011/164/3/1/cherry___water_drops_8_by_catalinlungu-d3itq4i.jpg',
      organization: '62e1f4e4202550c04df95078'
    },
    {
      name: 'Secured In The Cloud',
      industry: 'Technology',
      type: 'public',
      price: 5,
      date: 07 / 22 / 2022,
      image:
        'https://susannetedrick.com/wp-content/uploads/2021/05/cloud-technology-1536x960.jpg',
      organization: '62e1f4e4202550c04df95076'
    },
    {
      name: 'Cluck-Topia',
      industry: 'Food',
      type: 'public',
      price: 5,
      date: 07 / 22 / 2022,
      image:
        'http://2.bp.blogspot.com/-IK8k4BLWMYg/T_luHmT_gjI/AAAAAAAAEGQ/QmDhVyPKFWE/w1200-h630-p-nu/cajun+chicken+10.jpg',
      organization: '62e1f4e4202550c04df95073'
    },
    {
      name: "It's The Tech Life for Me",
      industry: 'Technology',
      type: 'public',
      price: 5,
      date: 07 / 22 / 2022,
      image:
        'https://edtechs20.trubox.ca/wp-content/uploads/sites/807/2020/06/2222222-1440x774.jpg',
      organization: '62e1f4e4202550c04df95075'
    },
    {
      name: 'Smiley and the Jamboree',
      industry: 'Entertainment',
      type: 'public',
      price: 5,
      date: 07 / 22 / 2022,
      image:
        'https://i1.wp.com/farm3.staticflickr.com/2893/12658874163_ab1a4ef409.jpg',
      organization: '62e1f4e4202550c04df95074'
    },
    {
      name: 'SunShine and Laughs',
      industry: 'Entertainment',
      type: 'public',
      price: 5,
      date: 07 / 22 / 2022,
      image:
        'https://3.bp.blogspot.com/-Ql2rA_ftH_M/UFCUbPyoPlI/AAAAAAAAJYY/oettIZ-p9y0/s1600/Clown+laughing.jpg',
      organization: '62e1f4e4202550c04df95074'
    },
    {
      name: 'Tech With A Friend',
      industry: 'Technology',
      type: 'public',
      price: 5,
      date: 07 / 22 / 2022,
      image:
        'https://www.heart-resources.org/wp-content/uploads/2019/03/iStock-993627874-1320x880.jpg',
      organization: '62e1f4e4202550c04df95075'
    },
    {
      name: 'Terror Hunters',
      industry: 'Entertainment',
      type: 'public',
      price: 5,
      date: 07 / 22 / 2022,
      image: 'https://live.staticflickr.com/5584/15154091472_7921fb897f_b.jpg',
      organization: '62e1f4e4202550c04df95072'
    },
    {
      name: 'Call Me Scared',
      industry: 'Entertainment',
      type: 'public',
      price: 5,
      date: 07 / 22 / 2022,
      image: 'http://pngimg.com/uploads/halloween/halloween_PNG152.png',
      organization: '62e1f4e4202550c04df95072'
    }
    */
  ]
  await Event.insertMany(events)
  console.log('Events created')
  /*const org = [
    {
      name: 'Terror Finder',
      industry: 'Entertainment',
      email: 'terrorfinder@test.com',
      phone: ''
    },
    {
      name: "Clucker's",
      industry: 'Food',
      email: 'cluckers@test.com',
      phone: ''
    },
    {
      name: "Terry's Dancing Clowns",
      industry: 'Entertainment',
      email: 'terrysdancingclowns@test.com',
      phone: ''
    },
    {
      name: 'Git Techy',
      industry: 'Technology',
      email: 'gittech@test.com',
      phone: ''
    },
    {
      name: 'Secure Tech',
      industry: 'Technology',
      email: 'securetech@test.com',
      phone: ''
    },
    {
      name: "Mayward's Clinic",
      industry: 'Medical',
      email: 'maywardsclinic@test.com',
      phone: ''
    },
    {
      name: 'Cherry Pickers',
      industry: 'Food',
      email: 'cherrypickers@test.com',
      phone: ''
    },
    {
      name: 'Benji Spook House',
      industry: 'Entertainment',
      email: 'benjispookhouse@test.com',
      phone: ''
    }
  ]
  await Organization.insertMany(org)
  console.log('Organizations created')
  const person = [
    {
      firstName: 'Sara',
      lastName: 'Smith',
      phone: '',
      email: 'ss@test.com'
    },
    {
      firstName: 'Bobbert',
      lastName: 'Johnson',
      phone: '',
      email: 'bj@test.com'
    },
    {
      firstName: 'Dean',
      lastName: 'Winchester',
      phone: '',
      email: 'dw@test.com'
    },
    {
      firstName: 'Sam',
      lastName: 'Winchester',
      phone: '',
      email: 'sw@test.com'
    },
    {
      firstName: 'Harry',
      lastName: 'Potter',
      phone: '',
      email: 'hp@test.com'
    },
    {
      firstName: 'John',
      lastName: 'Wick',
      phone: '',
      email: 'jw@test.com'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      phone: '',
      email: 'jd@test.com'
    },
    {
      firstName: 'Junji',
      lastName: 'Ito',
      phone: '',
      email: 'ji@test.com'
    },
    {
      firstName: 'Gojo',
      lastName: 'Satoru',
      phone: '',
      email: 'gs@test.com'
    },
    {
      firstName: 'Bob',
      lastName: 'Smith',
      phone: '',
      email: 'bs@test.com'
    }
  ]
  await Personal.insertMany(person)
  console.log('Personals created')*/
}

const run = async () => {
  await main()
  db.close()
}
run()
