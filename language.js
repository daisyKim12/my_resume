document.addEventListener("DOMContentLoaded", function () {
    fetch("english.json")
        .then(response => response.json())
        .then(data => {
            document.querySelector("#mainLeft .text-box p").textContent = data.profile;

            const interestList = document.querySelector("#mainLeft ul");
            interestList.innerHTML = "";
            data.interests.forEach(interest => {
                let li = document.createElement("li");
                li.textContent = interest;
                interestList.appendChild(li);
            });

            const internshipSection = document.querySelectorAll("#mainLeft section")[2];
            internshipSection.innerHTML = '<h2 class="section-title"><i class="fas fa-suitcase"></i>Internships</h2>';
            data.internships.forEach(internship => {
                let h3 = document.createElement("h3");
                h3.textContent = internship.title;

                let p = document.createElement("p");
                p.className = "date";
                p.textContent = internship.date;

                let ul = document.createElement("ul");
                internship.tasks.forEach(task => {
                    let li = document.createElement("li");
                    li.textContent = task;
                    ul.appendChild(li);
                });

                internshipSection.appendChild(h3);
                internshipSection.appendChild(p);
                internshipSection.appendChild(ul);
            });

            const educationSection = document.querySelectorAll("#mainLeft section")[3];
            educationSection.innerHTML = '<h2 class="section-title"><i class="fas fa-graduation-cap"></i>Education</h2>';
            let eduH3 = document.createElement("h3");
            eduH3.textContent = data.education.university;
            let eduP = document.createElement("p");
            eduP.className = "date";
            eduP.textContent = data.education.duration;
            let eduUl = document.createElement("ul");
            data.education.achievements.forEach(achievement => {
                let li = document.createElement("li");
                if (typeof achievement === "object") {
                    let subUl = document.createElement("ul");
                    for (let key in achievement.semesters) {
                        let subLi = document.createElement("li");
                        subLi.textContent = `${key}: ${achievement.semesters[key]}`;
                        subUl.appendChild(subLi);
                    }
                    li.appendChild(subUl);
                } else {
                    li.textContent = achievement;
                }
                eduUl.appendChild(li);
            });

            educationSection.appendChild(eduH3);
            educationSection.appendChild(eduP);
            educationSection.appendChild(eduUl);
        })
        .catch(error => console.error("Error loading language file:", error));
});
