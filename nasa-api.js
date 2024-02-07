const options = {
    method: "GET",
    mode : "cors",
    cache: "default"
};

async function imageNasa () {await fetch ('https://api.nasa.gov/planetary/apod?api_key=IcZggugEcenGatVzUOddrDhBolayLxdHGxB52xdB', options)
    .then(response => {response.json()
        .then(data => {console.log(data)
            let section = document.createElement('section')            

            let image = document.createElement('img')
            image.setAttribute('id', 'img')
            image.src = data.url;
            section.append(image)
            
            document.querySelector('.photoOfDay').append(section)
        }) 
    })
    .catch(e => {
        console.log("ERRO: ", +e)
    })
};

imageNasa();