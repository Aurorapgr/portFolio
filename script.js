const sect = document.querySelector('.textParagTwo')
const anima = document.querySelector('.animation')
const graf = document.querySelector('.graf');
const textHead = document.querySelector('.textHead')
const imgDemo = document.querySelector('.imgDemo')

const anim = new IntersectionObserver((entry)=>{
    if(entry[0].isIntersecting){
        anima.classList.add('anima');
        graf.classList.add('animaGraf')
    }

})
const imgIntoAnim = new IntersectionObserver((e)=>{
    console.log(e[0].isIntersecting)
    if(e[0].isIntersecting){
        imgDemo.classList.add('imgDemoAnim')
    }
})