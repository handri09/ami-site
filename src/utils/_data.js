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
