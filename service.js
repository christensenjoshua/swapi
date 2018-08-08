function Service(cb, cbD) {
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
    function getOne(query){
        $.get(query).then(res =>{
            people.push(res)
            cbD()
        }).catch(err =>{
            console.error(err)
            people = []
        })
    }
    this.returnPeople = function () {
        let peopleCopy = []
        people.forEach(person => {
            peopleCopy.push(person)
        })
        return peopleCopy
    }
    this.detailPerson = function(url){
        people = []
        getOne(url)

    }
    get('people')
    this.getPeople = function(){
        get('people')
    }
}