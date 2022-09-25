const logout = async () => {
    const response = await fetch( '/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    } );

    if ( response.ok ) window.location.replace( '/' );
    else alert( 'Unable to logout' );
}

document.querySelector( '#logout' ).addEventListener( 'click', logout );