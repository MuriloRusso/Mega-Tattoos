 var btnMenu = document.getElementById('btn-menu');
        var menu = document.getElementById('menu');
        var line = document.querySelectorAll('.line');
        var isMenuOpen = false;
        function abrirMenu(){
            if(isMenuOpen === false){
                line[0].style.display = 'none';
                line[1].style.display = 'none';
                line[2].style.display = 'none';
                btnMenu.innerText = "X";
                isMenuOpen = true;
                menu.style.transform = 'translateX(0)';
            }
            else{
                btnMenu.innerText = "";
                btnMenu.innerHTML = `<hr class='line'><hr class='line'><hr class='line'>`;
                isMenuOpen = false;
                menu.style.transform = 'translateX(-100%)';
            }
        }
        for(var x = 1; x < 9999; x++){
            setTimeout(function(){
                var tela = window.innerWidth;
                if(tela > 999){
                    menu.style.transform = "translateX(0)";
                }
                else{
                    if(isMenuOpen === false){
                        menu.style.transform = "translateX(-100%)";
                    }
                }
            }, 300*x);
        }