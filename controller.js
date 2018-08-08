function Controller() {
    let service = new Service(draw, drawDetail)

    function draw() {
        //iterate through people
        let people = service.returnPeople()
        let template = ``
        people.forEach(person => {
            template += `
            <div class="col-6 col-sm-4 text-center">
                <img src="https://via.placeholder.com/150x150">
                <h5>Name: ${person.name}</h5>
                <p>Gender: ${person.gender}</p>
                <p>Birth Year: ${person.birth_year}</p>
                <p>More to come...</p>
                <button class="btn btn-primary" type="button" onclick="app.controller.detailPerson('${person.url}')">More Info</button>
            </div>
            `
        })
        document.getElementById('people').innerHTML = template
    }
    function drawDetail() {
        //iterate through people
        let people = service.returnPeople()
        let template = ``
        people.forEach(person => {
            template += `
            <div class="col-12 text-center">
                <img src="https://via.placeholder.com/150x150">
                <h5>Name: ${person.name}</h5>
                <p>Gender: ${person.gender}</p>
                <p>Birth Year: ${person.birth_year}</p>
                <p>Height: ${person.height}</p>
                <p>Mass: ${person.mass}</p>
                <p>Hair Color: ${person.hair_color}</p>
                <p>Skin Color: ${person.skin_color}</p>
                <p>Eye Color: ${person.eye_color}</p>
                <button class="btn btn-primary" type="button" onclick="app.controller.getPeople()">Return to List</button>
            </div>
            `
        })
        document.getElementById('people').innerHTML = template
    }
    this.detailPerson = function(url){
        service.detailPerson(url)
    }
    this.getPeople = function(){
        service.getPeople()
    }
}