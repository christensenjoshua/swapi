function Service(cb) {
    let people = []
    function get(query) {
        $.get('https://swapi.co/api/' + query).then(res => {
            people = res.results
            cb()
        }
        ).catch(err => {
            console.error(err)
            people = []
        }

        )
    }
    this.returnPeople = function () {
        let peopleCopy = []
        people.forEach(person => {
            peopleCopy.push(person)
        })
        return peopleCopy
    }
    get('people')
}