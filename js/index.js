// Your code goes here

let totalClicks = 0

var theBody = document.querySelector('body')

theBody.addEventListener('click',
    () => {
        totalClicks++
        if (totalClicks == 15) {
            alert("5 more clicks left")
        }
        if (totalClicks == 20) {
            theBody.innerHTML = "You've arrived"

            theBody.style.backgroundColor = "green"
            theBody.style.fontSize = "8rem";
            theBody.style.color = "white"

        }
    }
)

window.addEventListener('scroll', (event) => {
    console.log("you scrolled")
})

header.addEventListener('dblclick',
    () => {
        header.style.backgroundColor = "yellow"
        alert("you spilled the mustard")
        header.style.tranform = "scaleX(-1)"
        header.style.transition = "transform 1s"
    }

)

theBody.addEventListener('wheel',
    (eveny) => {
        console.log(event.deltaY)
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)

        containerHome.style.backgroundColor = `rgb(${r},${g},${b}`;

    })

bus.addEventListener(
    'mouseenter',
    () => {
        bus.style.transform = "scaleX(-1)";
        bus.style.transition = "transform 1s"
        bus.style.backfaceVisibility = "hidden"; //does not work

    }
)
bus.addEventListener(
    'mouseleave',
    () => {
        bus.style.transform = "scaleX(1)"
        bus.style.transition = "transform 1s"
    }
)

let n = -1;
bus.addEventListener(
    'click',
    () => {
        bus.style.transform = `scaleY(${n})`
        bus.style.transition = "transform 1.25s"
        n *= -1
    }
)

let images = document.querySelectorAll("section img")

for (var i = 0; i < images.length; i++) {

    images[i].addEventListener(
        'click',
        function() {
            // console.log(this.style)
            if (this.style.opacity === "1") {
                this.style.opacity = "0%"
                this.style.transition = "opacity .5s"
                console.log(images[i])
            } else {
                this.style.opacity = "100%"
                this.style.transition = "opacity .5s"
            }
        }
    )
}

window.addEventListener('keypress', (event) => { alert(event.charCode + " was pressed") })

let h2all = document.querySelectorAll("h2")

for (var i = 0; i < h2all.length; i++) {

    h2all[i].addEventListener(
        'select',
        function() {
            console.log(this.style)
            this.style.color = "green"
            if (this.style.opacity === "1") {
                this.style.opacity = "0%"
                this.style.transition = "opacity .5s"
                console.log(images[i])
            } else {
                this.style.opacity = "100%"
                this.style.transition = "opacity .5s"
            }
        }
    )
}

window.addEventListener('load', (event) => {
    alert("you get 20 clicks. Use them wisely")

})

let footer = document.querySelector('footer')
footer.addEventListener("dblclick", () => {
    footer.innerHTML = "Access Denied"
    footer.style.backgroundColor = "red"
    footer.style.color = "white"
    footer.style.fontSize = "3rem"
    footer.style.textAlign = "center"
    footer.style.padding = "15px 0 15px 0"

})

secondbtn.addEventListener('click', function(event) {
    let alice = document.createElement("iframe")
    alice.setAttribute('src', 'https://www.youtube.com/embed/b5HgF_1Sihc')
    console.log(alice)
    this.parentNode.replaceChild(alice, this)

})

function addVideo(buttonID, URL) {
    buttonID.addEventListener('click', function(event) {
        let alice = document.createElement("iframe")
        alice.setAttribute('src', URL)
        this.parentNode.replaceChild(alice, this)

    })
}

addVideo(thirdbtn,"https://www.youtube.com/embed/hc7joL3muqM")
addVideo(firstbtn,"https://www.youtube.com/embed/AqIehvpdAPI")


// Can I put all this in an iframe object straight away at once?
{ /* <iframe width="560" height="315" src="https://www.youtube.com/embed/AqIehvpdAPI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */ }

{ /* <iframe width="560" height="315" src="https://www.youtube.com/embed/hc7joL3muqM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */ }

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/jPyYGw9Jn6w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/b5HgF_1Sihc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}