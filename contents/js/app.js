$( "#tweets" ).on( "click", function( event ) {
    listtweets()
});

$( "#followers" ).on( "click", function( event ) {
    listfollowers()
});

$( "#friends" ).on( "click", function( event ) {
    friends.load()
});

$( "#favorites" ).on( "click", function( event ) {
    favorites.load()
});


