document.querySelector('#home').addEventListener('click',(e) => {
   const ps = document.createElement('p')
   ps.textContent = 'sdsdsds'
   ps.style = "border:1px solid red ; background : rgb(251, 190, 139); width : 300px; font-size: 30px" 
   document.querySelector('#sect').appendChild(ps)

})
document.querySelector('#about').addEventListener('click',(e) => {
    const ps = document.createElement('p')
    ps.textContent = 'sdsds'
    ps.style = "border:1px solid red ; background : rgb(251, 190, 139)"
    document.querySelector('#sec').appendChild(ps)
 
 })
 document.querySelector('#projects').addEventListener('click',(e) => {
    const ps = document.createElement('p')
    ps.textContent = 'sdsds'
    ps.style = "border:1px solid red ; background : rgb(251, 190, 139)"
    document.querySelector('ol').appendChild(ps)
 
 })

document.querySelector('#reset').addEventListener('click', (e)=> {
    const pss = document.querySelectorAll('p')
    pss.forEach(p => p.remove()) 
})


 




// document.querySelector('.btn').addEventListener('click', (e)=> {
//     const parra = document.createElement('p')
//     parra.textContent = 'this is a new elemmente js'
//     document.querySelector('.lists').appendChild(parra)
// })



