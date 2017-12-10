const router = require('express').Router()
const setLocals = require('../../helpers/setLocals')
const powers = require('../../../data/powers.json')

router.get(/(?:sheets?)?/g, (req, res) => {
  res.render('homepage', {reviews, albums, flash, title: 'Home Page'})
})

module.exports = router