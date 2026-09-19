const messageButton = document.getElementById("messageButton");
const messageOutput = document.getElementById("messageOutput");

function showMessage() {
    const message = "Thanks for visiting my website!";
    messageOutput.textContent = message;
}

messageButton.addEventListener("click", showMessage);


const chartCanvas = document.getElementById("interestChart");

new Chart(chartCanvas, {
    type: "doughnut",

    data: {
        labels: ["Knitting", "Baking", "Movies"],

        datasets: [{
            label: "My Interests",
            data: [30, 40, 30]
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: true,

        plugins: {
            legend: {
                position: "bottom"
            }
        }
    }
});
const careerButton = document.getElementById("career-button");
const careerMessage = document.getElementById("career-message");

function showCareerMessage() {
    careerMessage.textContent =
        "I am currently preparing for my job search and exploring different career opportunities.";
}

careerButton.addEventListener("click", showCareerMessage);