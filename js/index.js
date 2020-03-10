// Your code goes here
alert("you get 20 clicks. Use them wisely")
let totalClicks = 0

var theBody = document.querySelector('body')

theBody.addEventListener('click',
    ()=>{
      totalClicks++
      if (totalClicks ==15){
        alert("5 more clicks left")
      }
      if (totalClicks ==20){
        theBody.innerHTML = "Access Denied"
        
        theBody.style.backgroundColor="red"

      }
    }

)




bus.addEventListener(
    'mouseenter',
    () => {
        bus.style.transition = "transform 1"
        bus.style.transform = "scaleX(-1)";
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
let clickCount = 1

let images = document.querySelectorAll("section img")
console.log(images.length)

for (var i = 0; i < images.length; i++) {

    images[i].addEventListener(
        'click',
        function() {
            if (clickCount > 0) {
                this.style.opacity = "0%"
                this.style.transition = "opacity .5s"
                console.log(images[i])
            } else {
                this.style.opacity = "100%"
                this.style.transition = "opacity .5s"
            }
            clickCount *= -1
        }
    )
}