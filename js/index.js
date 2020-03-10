// Your code goes here
alert("you get 20 clicks. Use them wisely")
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
      let r = Math.floor(Math.random()*255)
      let g = Math.floor(Math.random()*255)
      let b = Math.floor(Math.random()*255)

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
    // bus.addEventListener(
    // 'ondrag',
    // () => {
    //     bus.style.transform ="rotateY(180deg)"
    // }
    // )

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

// for (var i = 0; i < images.length; i++) {

//   images[i].addEventListener(
//       'click',
//       function() {
//           if (clickCount > 0) {
//               this.style.opacity = "0%"
//               this.style.transition = "opacity .5s"
//               console.log(images[i])
//           } else {
//               this.style.opacity = "100%"
//               this.style.transition = "opacity .5s"
//           }
//           clickCount *= -1
//       }
//   )
// }