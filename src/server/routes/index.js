const router = require('express').Router()
const setLocals = require('../../helpers/setLocals')
const powers = require('../../../data/powers.json')

router.use('/', (req, res, next) => {
  setLocals(res)
  next()
})

router.get(/^\/(sheets?)?$/, (req, res) => {
  res.render('homepage', {power: powers[0]})
})

module.exports = router