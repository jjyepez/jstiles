generarRandomTiles( '.contenedor', 100 )
inicializarTiles( '.contenedor' )

/* la siguiente funcion no forma parte de la funcionalidad de masonry */
function generarRandomTiles( selector, n = 20 ){
    if( !window._glb ) window._glb = {}
    window._glb.nColumnas = null
    const $contenedor = document.querySelector( selector )
          $contenedor.innerHTML = ''
    for(var i=0;i<n;i++){
      const $card = document.createElement('div')
            $card.classList.add('card')
      const z = ~~(Math.random()*3)
      const w = ~~(Math.random()*340)+100
      const h = ~~(Math.random()*340)+100
      $card.innerHTML = `<img style='width:100%' src='https://source.unsplash.com/${w}x${h}'>`
      $contenedor.appendChild( $card )
    }
  }