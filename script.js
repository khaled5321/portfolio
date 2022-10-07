//Contact Form
const contactForm=document.getElementById('contactform')
const subject=document.getElementById('subject')
const msg=document.getElementById('message')

contactForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    contactForm.reset()

    window.location.href=`mailto:khaledhaggag656@gmail.com?subject=${subject.value}&body=${msg.value}`;
})

//hue rotate for title
const anchor=document.getElementById('title')
const rekt=anchor.getBoundingClientRect()

document.addEventListener('mousemove',(e)=>{
    const mousex=e.clientX;
    const mousey= e.clientY;
    
    const anchorx=rekt.left + rekt.width / 2
    const anchory=rekt.top + rekt.height / 2

    const angledeg=angle(mousex,mousey,anchorx,anchory)
    anchor.style.filter= `hue-rotate(${angledeg}deg)`
})

function angle(cx,cy,ex,ey){
    const dy=ey-cy
    const dx=ex-cx
    const rad=Math.atan2(dy,dx)
    const deg = rad *180/ Math.PI
    return deg
}
