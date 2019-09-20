const cartaFondo = (c) =>{
   const carta= JSON.parse(c.pumpCardxDots).map((dot,index)=>[dot,JSON.parse(c.pumpCardyDots)[index]])
   return carta;
}
const cartaSuperficie = (c) =>
   JSON.parse(c.surfaceCardxDots).map((dot,index)=>[dot,JSON.parse(c.surfaceCardyDots)[index]])
   


export {cartaFondo,cartaSuperficie};