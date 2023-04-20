const { structuredDataTest } = require('structured-data-testing-tool')

var id = process.argv.slice(2)[0];

if(!id){
    return console.log('Se require un id valido!')
}
 
const url = `https://www.infocasas.com.uy/apartamento-en-venta-4-dormitorios/${id}`
 
 
structuredDataTest(url, { 
  schemas: [ 'RentAction' ]
})
.then(res => {
    const {price, priceCurrency} = res.structuredData.jsonld.RentAction[0].priceSpecification
    console.log(priceCurrency, price)
})
.catch(err => {
  if (err.type === 'VALIDATION_FAILED') {
    console.log(`price not found for id ${id}`)
    result = err.res
  } else {
    console.log(err) // Handle other errors here (e.g. an error fetching a URL)
  }
})