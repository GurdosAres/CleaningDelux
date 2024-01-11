function CloseOpen() {
    navMenu.classList.toggle("menuAdapt");
    HamBtn.classList.toggle("IsActive");
    menuVisibility.classList.toggle("visibility");
}
let options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 1.0,
  };

  const targets = document.querySelectorAll('.targetObs')

  const lazyLoad = target => {
    const io = new IntersectionObserver((entries,observer) => {

        entries.forEach(entry => {
            console.log("work!")
            if(entry.isIntersecting){
                const obj = entry.target
              

                if(entry.target.localName === "img"){
                    const src = obj.getAttribute('data-lazy')
                    obj.setAttribute('src',src)
                    obj.classList.add('fade')
                }else{
                    obj.classList.add('fade')
                }


                observer.disconnect()
            }
        })


    })
    io.observe(target)
  }
 targets.forEach(lazyLoad)








