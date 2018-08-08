function Controller() {
    let service = new Service(draw)

    function draw() {
        //iterate through people
        let people = service.returnPeople()
        console.log(people)
        let template = ``
        people.forEach(person => {
            template += `
            <div class="col-3">
                <img src="http://via.placeholder.com/150x150">
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
    this.detailPerson = function(url){
        //define getting stuff
    }
}