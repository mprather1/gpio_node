import fs from 'fs'
import chai from 'chai'
import chaiHttp from 'chai-http'
import mock from 'mock-fs'
import gpio from 'rpi-gpio'
import logger from 'winston-color'

const expect = chai.expect

it ('opens a pin with out', (done) => {
  mock({
    '/sys/class/gpio/gpio23/direction': ''
  })
  
  gpio.open(16, 'out', () => {
    const direction = fs.readFileSync('/sys/class/gpio/gpio/23/direction').toString()
    
    expect(direction).to.equal('out')
    done()
  })
})
