function toggleMode() {
    const html = document.documentElement
    
    html.classList.toggle('light');
    
    const img = document.querySelector('#profile img')

    if (html.classList.contains('light')) {
        img.setAttribute('src', 'assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de Bianca Marques, na neve com óculos escuros')
    } else {
        img.setAttribute('src', 'assets/avatar-dark.png')
        img.setAttribute('alt', 'Foto de Bianca Marques, em uma ponte com vista para natureza linda')
    }



}