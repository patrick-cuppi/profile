const options = {
    method: "GET",
    mode : "cors",
    cache: "default"
};

async function imageNasa() {
    try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=IcZggugEcenGatVzUOddrDhBolayLxdHGxB52xdB')
        const data = await response.json()

        console.log(data)

        const title = document.createElement('h2')
        title.innerHTML = data.title 
        document.querySelector('.titleOfDay').append(title)

        const dateDay = document.createElement('h4')
        dateDay.innerHTML = data.date 
        document.querySelector('.titleOfDay').append(dateDay)

        const explanation = document.createElement('p')
        explanation.innerHTML = data.explanation
        document.querySelector('.explanationOfDay').append(explanation)

        const image = document.createElement('img')
        image.setAttribute('img', 'img')
        image.src = data.url
        document.querySelector('.photoOfDay').append(image)
        
    } catch (error) {
        console.log(error)
    }
    
}

imageNasa()

// function imageNasa () {
//     fetch ('https://api.nasa.gov/planetary/apod?api_key=IcZggugEcenGatVzUOddrDhBolayLxdHGxB52xdB', options)
//     .then(response => {response.json()
//         .then(data => { console.log(data)
            
//             let sectionTitle = document.createElement('sectionTitle');
//             let title = document.createElement('p');
//             title.innerHTML = data.title + '<br>' + data.date;
//             sectionTitle.append(title);
//             document.querySelector('.titleOfDay').append(sectionTitle);


//             let sectionExplanation = document.createElement('sectionExplanation');
//             let explanation = document.createElement('p');
//             explanation.innerHTML = data.explanation;
//             sectionExplanation.append(explanation);
//             document.querySelector('.explanationOfDay').append(sectionExplanation);

            
//             let sectionImage = document.createElement('sectionImage');           
//             let image = document.createElement('img');
//             image.setAttribute('img', 'img');
//             image.src = data.url;
//             sectionImage.append(image);
//             document.querySelector('.photoOfDay').append(sectionImage);

//         }) 
//     })
//     .catch(e => {
//         console.log("ERRO: ", +e)
//     }); 
// };

// imageNasa();