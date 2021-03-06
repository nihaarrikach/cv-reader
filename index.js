//array of objects which contains info abou candidates
const data = [
    {
        name: "niharika",
        age: 20,
        city: "faridabad",
        language: "python",
        framework: "django",
        image: "https://randomuser.me/api/portraits/women/51.jpg"
    },
    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]

//cv iterator
function cviterators(profiles) {
    let nextindex = 0;
    return {
        next: function () {
            if (nextindex < profiles.length) {
                return {
                    value: profiles[nextindex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }

    }
}
const candidates = cviterators(data);
nextCV();
//button listener for next button
const next = document.getElementById("next");
next.addEventListener("click", nextCV);



function nextCV() {
    const currentCandidate = candidates.next().value;

    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src="${currentCandidate.image}">`
        profile.innerHTML = ` <ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul> `;
    }
    else {
        alert('End of candidate applications');
        window.location.reload();
    }
}