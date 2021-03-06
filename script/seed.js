const db = require('../server/db')
const {User, Product} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  await Promise.all([
    Product.create({
      name: 'Wicky throw pillow',
      price: 30.00,
      description: 'The illest throw pillow ever made',
      imageUrl: '/wicky-pillow.jpg',
      variety: 'accessory'
    }),
    Product.create({
      name: 'ABCS NY cap',
      price: 20.00,
      description: 'Brooklyn, Bronx, Queens and Staten From the Battery to the top of Manhattan Asian, Middle-Eastern and Latin Black, White, New York you make it happen!',
      imageUrl: '/abcs-hat.jpg',
      variety: 'cap'
    }),
    Product.create({
      name: 'Coffee queen t-shirt',
      price: 25.00,
      description: 'Tenga un cafecito mijo. \n (Have a coffee my dear.)',
      imageUrl: '/coffee-queen-tee.jpg',
      variety: 'tee'
    }),
    Product.create({
      name: 'Coffee Demon throw pillow',
      price: 30.00,
      description: 'Cop this pillow but keep it away from your coffee. The coffee demon is a caffeine fiend out to consume your soul and cause havoc.',
      imageUrl: '/coffee-demon.jpg',
      variety: 'accessory'
    }),
    Product.create({
      name: 'Wicky Rat tee',
      price: 25.00,
      description: 'Yer!',
      imageUrl: '/wicky-rat-tee.jpg',
      variety: 'tee'
    }),
    Product.create({
      name: 'Wanda Rat throw pillow',
      price: 30.00,
      description: 'Another ting for the youth dem',
      imageUrl: '/wanda-rat.jpg',
      variety: 'accessory'
    })
  ])
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
