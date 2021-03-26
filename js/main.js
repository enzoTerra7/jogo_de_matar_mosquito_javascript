const HeigthAndWidth = {

    width: window.innerWidth,
    heigth: window.innerHeight,

    widthAndHeigth(){

        HeigthAndWidth.width = window.innerWidth
        HeigthAndWidth.heigth = window.innerHeight

    }

}
const randomizePosition = {

    positionX : Math.floor(Math.random() * HeigthAndWidth.width) - 70,
    positionY : Math.floor(Math.random() * HeigthAndWidth.heigth) - 70,

    position(){

        randomizePosition.positionX = randomizePosition.positionX < 0 ? 0 : randomizePosition.positionX
        randomizePosition.positionY = randomizePosition.positionY < 0 ? 0 : randomizePosition.positionY

    }

}
const randomSizeAndRotate = {

    class: Math.floor(Math.random() * 3),
    classRotate: Math.floor(Math.random() * 2),
    
    defineClassImg(){

        switch (randomSizeAndRotate.class){

            case 0:
                randomSizeAndRotate.class = 'moscas1';
                break;
            
            case 1:
                randomSizeAndRotate.class = 'moscas2';
                break;

            case 2:
                randomSizeAndRotate.class = 'moscas3';
                break;

        }

    },

    defineClassRotate(){

        switch (randomSizeAndRotate.classRotate){

            case 0:
                randomSizeAndRotate.classRotate = 'rotateFalse';
                break;
            
            case 1:
                randomSizeAndRotate.classRotate = 'rotateTrue';
                break;

        }

    }

}
const creatFlyBug = {

    i: 0,
    creatHtml(){

        randomSizeAndRotate.defineClassImg()
        randomSizeAndRotate.defineClassRotate()

        createImg = document.createElement('img')
        createImg.src = './img/mosca.png'
        createImg.className = randomSizeAndRotate.class + ' ' + randomSizeAndRotate.classRotate
        createImg.style.left = randomizePosition.positionX + 'px'
        createImg.style.top = randomizePosition.positionY + 'px'
        createImg.style.position = 'absolute'
        createImg.id = 'delete'
        createImg.onclick = () => {
            if(document.querySelector('#delete')){
                document.querySelector('#delete').remove()
                let points = ++creatFlyBug.i
                document.querySelector('.nmr').innerHTML = points
            }
        }
        return document.body.appendChild(createImg)

    }

}
const reset = {

    i: 1,
    removeAndLosePoints(){

        if(document.querySelector('#delete')){
            document.querySelector('#delete').remove()
            reset.i = String(reset.i)
            document.getElementById(reset.i).src =' ./img/coracao_vazio.png'
            reset.i++
            if(reset.i == 4){
                setTimeout(() =>{
                    window.location.href = 'game_over.html'
                }, 0050)
            }
        }

    },
    reset(){
        
        randomizePosition.positionX = Math.floor(Math.random() * HeigthAndWidth.width) - 70
        randomizePosition.positionY = Math.floor(Math.random() * HeigthAndWidth.heigth) - 70
        randomSizeAndRotate.class = Math.floor(Math.random() * 3)
        randomSizeAndRotate.classRotate = Math.floor(Math.random() * 2)

        randomizePosition.position()
        randomSizeAndRotate.defineClassImg()
        randomSizeAndRotate.defineClassRotate()
    }

}
function setTimeDificult(){

     var level = document.querySelector('#selectNvl').value

     window.location.href = 'index.html?' + level

}
const cronometro = {

    time: 50,
    spawn: 1500,

    timing(){

        let url = window.location.search
        url = url.replace('?', '')

        if(url == 1){
            cronometro.time = 30
            cronometro.spawn = 1500
        } else if(url == 2){
            cronometro.time = 50
            cronometro.spawn = 1500
        } else if(url == 3){
            cronometro.time = 100
            cronometro.spawn = 1000
        } else if(url == 4){
            cronometro.time = 500
            cronometro.spawn = 750
        } else {
            cronometor.time = 10
        }

        if(cronometro.time >= 0){
            let timer = setInterval(()=>{
                if(cronometro.time < 0){
                    clearInterval(timer)
                    window.location.href = 'win.html'
                }
                document.querySelector('.time').innerHTML = cronometro.time
                cronometro.time--
            }, 1000)
        }
    }

}
