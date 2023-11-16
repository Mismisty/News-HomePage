const open = document.getElementById('open');
const close = document.getElementById('close');
const sideMenu = document.getElementById('sidenav');



home = (x,y,z) =>{
    x.addEventListener('click',()=>{
        x.classList.toggle('hide');
        y.classList.toggle('hide');

        if(z == "slide-in"){
            sideMenu.classList.toggle("slide");
            document.body.style.backgroundColor = "rgba(0,0,0,0.6)"; 
        }

        if(z == "slide-out"){
            sideMenu.classList.toggle("slide");
            document.body.style.backgroundColor = 'white';
        }
    });
};

home(open,close,"slide-in");
home(close,open,"slide-out");

