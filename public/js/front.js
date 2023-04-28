console.log('It`s front js')
let allproduct = document.querySelector('.allproduct')
let container_product = document.querySelector('.container_product')
let select = document.querySelector('.select')

const run = async () => {
   const result = await axios.get('/product');
   result.data.forEach(item => {
      container_product.innerHTML += `<div class = 'product'>${item.name}
      <img src ="${item.img}" class ="prod_img">
      </div>`
   })
}

run()

allproduct.addEventListener('change', () => {
   select.classList.add('on')
   select.innerHTML = ''
   filter()
})

select.addEventListener('click', () => {
   select.classList.remove('on')
   select.innerHTML = ''
   run()
})

const filter = async () => {
   const product = await axios.get('/product/selprod', {
      params: {
         q: allproduct.value
      }
   })
   const name = product.data.forEach(el => {
      select.innerHTML += select.innerHTML += `
      <div class ="product">${el.name}
      <img src ="${el.img}">
      </div>
      `
   })
}