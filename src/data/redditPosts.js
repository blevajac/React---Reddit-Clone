import moment from 'moment';

export default [
  {
    title: "Zec mi je pjeo gace",
    comment: 100,
    submitted: moment()
  },
  {
    title: "Zec je mene pojeo",
    comment: 10,
    submitted:  moment().subtract(1, 'minute')
  },
  {
    title: "Zec me poljuvio",
    comment: 50,
    submitted:  moment().subtract(5, 'minute')
  },
  {
    title: "Gdje je mi Zec",
    comment: 1000,
    submitted:  moment().subtract(3, 'day')
  }
]
