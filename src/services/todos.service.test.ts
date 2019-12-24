
import todosService from './todos.service'

describe("todosService", () => {

    it('should return a promise containing an object with a randomly generated number userId', async () => {

        // right now it's just hardedcoded to return some data
        const expectedResponseData = [
            {
                id: 1,
                title: 'First thing',
                description: 'This is a very interesting description',
            },
            {
                id: 2,
                title: 'Second thing',
                description: 'This is a another interesting description',
            },
        ]

        const result = await todosService()

        expect(result).toEqual({data: expectedResponseData})

    })

})