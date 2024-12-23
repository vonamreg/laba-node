import express from 'express'
import _ from 'lodash'


const app = express()
const PORT = 8000

let cars = [
    {
        id: 1,
        carModel: 'Model A',
        color: 'whitesmoke',
        number: 'aa333b'
    },
    {
        id: 2,
        carModel: 'Model B',
        color: 'black',
        number: 'vf587h'
    },
    {
        id: 3,
        carModel: 'Model Y',
        color: 'red',
        number: 'fn777d'
    },
    {
        id: 4,
        carModel: 'Model X',
        color: 'cj647u',
        number: 'yellow'
    },
    {
        id: 5,
        carModel: 'Model XXL',
        color: 'grey',
        number: 'ac936m'
    }
]


app.use(express.json())

app.get('/cars/', (req, res) => {
    res.status(200).json(cars)
})

app.get('/cars/:id', (req, res) => {
    const car = cars.find(car => car.id == req.params.id)

    if (_.isUndefined(car)) {
        res.status(404).json('Car does not exist')
    }

    res.status(200).json(car)
})

app.post('/cars/', (req, res) => {
    const newCar = {
        id: _.last(cars).id + 1,
        carModel: 'New Car Model',
        color: 'white',
        number: 'oo111o'
    }

    cars.push(newCar)

    res.json(newCar)
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})
