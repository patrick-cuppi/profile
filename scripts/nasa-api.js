const options = {
    method: "GET",
    mode : "cors",
    cache: "default"
};

function imageNasa () {
    fetch ('https://api.nasa.gov/planetary/apod?api_key=IcZggugEcenGatVzUOddrDhBolayLxdHGxB52xdB', options)
    .then(response => {response.json()
        .then(data => { console.log(data)
            
            let sectionTitle = document.createElement('sectionTitle');
            let title = document.createElement('p');
            title.innerHTML = data.title + '<br>' + data.date;
            sectionTitle.append(title);
            document.querySelector('.titleOfDay').append(sectionTitle);


            let sectionExplanation = document.createElement('sectionExplanation');
            let explanation = document.createElement('p');
            explanation.innerHTML = data.explanation;
            sectionExplanation.append(explanation);
            document.querySelector('.explanationOfDay').append(sectionExplanation);

            
            let sectionImage = document.createElement('sectionImage');           
            let image = document.createElement('img');
            image.setAttribute('img', 'img');
            image.src = data.url;
            sectionImage.append(image);
            document.querySelector('.photoOfDay').append(sectionImage);

        }) 
    })
    .catch(e => {
        console.log("ERRO: ", +e)
    }); 
};

imageNasa();