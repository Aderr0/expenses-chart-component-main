
const day = (new Date()).getDay()

const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
]

data.forEach((value, index) => {
    var element = document.getElementById(value.day)

    var valueCardElement = element.childNodes[1]
    var histoElement = element.childNodes[3]

    element.addEventListener("mouseenter", () => {
        valueCardElement.style.visibility = "visible"
    })
    element.addEventListener("mouseleave", () => {
        valueCardElement.style.visibility = "hidden"
    })

    if (index+1 == day) {
        histoElement.style.backgroundColor = "hsl(186, 34%, 60%)";

        element.addEventListener('mouseenter', () => {
            histoElement.style.backgroundColor = "hsl(186, 34%, 80%)"
        })
        element.addEventListener('mouseleave', () => {
            histoElement.style.backgroundColor = "hsl(186, 34%, 60%)"
        })
    }



    histoElement.style.height = value.amount + "%"
    valueCardElement.innerHTML = "$" + value.amount
    
    element
})
