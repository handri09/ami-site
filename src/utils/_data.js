export const actus = [
  {
    id : generateUID(),
    name : 'Helpting Child 1 on material 1',
    picture : 'enf1.jpg'
  }, {
    id : generateUID(),
    name : 'Helpting Child 2 on material 2',
    picture : 'enf1.jpg'
  },  {
    id : generateUID(),
    name : 'Helpting Child 2 on material 2',
    picture : 'enf1.jpg'
  },  {
    id : generateUID(),
    name : 'Helpting Child 2 on material 2',
    picture : 'enf1.jpg'
  },  {
    id : generateUID(),
    name : 'Helpting Child 2 on material 2',
    picture : 'enf1.jpg'
  },  {
    id : generateUID(),
    name : 'Helpting Child 2 on material 2',
    picture : 'enf1.jpg'
  },  {
    id : generateUID(),
    name : 'Helpting Child 2 on material 2',
    picture : 'enf1.jpg'
  },  {
    id : generateUID(),
    name : 'Helpting Child 2 on material 2',
    picture : 'enf1.jpg'
  },
]

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}


export const teams = [
  {
    id: generateUID(),
    name: 'Léonce Edmond Rakotondranoro',
    role: "AMI's president",
    story: `The leader of AMI. Willing to lead and help others.
    People are easily connected to Léonce and happy to speak with him.
    Léonce is willing to engage himself in helping children to finish their school`,
    url : './teams/leonce.jpg',
  },
  {
    id: generateUID(),
    name: 'Elie Edmond Ratiarimanantsoa',
    role: 'Treasurer Responsible',
    story: 'A reponsible of the financial management. devoted person who wants to help his fellow to succeed in life.',
    url : './teams/elie.jpg',
  },
  {
    id: generateUID(),
    name: 'Hajaniaina ANDRIANAVALONA',
    role: 'Communication & Design responsible',
    story: 'A devoted person who wants to help his fellow to succeed in life.',
    url : './teams/haja.png',
  },{
    id: generateUID(),
    name: 'Faniry H. N. Randrianavony',
    role: 'Communication & Relation responsible',
    story: ' A leader, a friend, a family who is doing his best to help his Malagasy fellow.',
    url : './teams/faniry.jpg',
  },{
    id: generateUID(),
    name: 'Randrianavony Tsitohaina Harimanana',
    role: 'Communication & Relation responsible',
    story: ' A leader, a friend, a family who is doing his best to help his Malagasy fellow.',
    url : './teams/tsito.jpg',
  }
]
