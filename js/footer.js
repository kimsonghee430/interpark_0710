window.addEventListener("load" , function(){
    const ftMenu = this.document.querySelectorAll(".footer-menu-list > li")
    ftMenu.forEach(function(ftMenus){
        // console.log(ftMenus);
        ftMenus.addEventListener("click",function(e){
            e.preventDefault()
            // console.log(this);
            this.classList.toggle("active")
        })
    })
})