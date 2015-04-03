$(document).ready(function() {

  var newLocation = '';
  var url = '';
  var i = 0;

  $('li #knownLocation').on('click', function(event) {
  console.log($(this).text());
  newLocation = ($(this).text());

  var locs ={};
  locs['Bangkok'] = 'lat=13.7563&lng=100.5018';
  locs['Boston'] = 'lat=42.3601&lng=71.0589';
  locs['Dubai'] = 'lat=25.2048&lng=55.2708';
  locs['Hong Kong'] = 'lat=22.2783&lng=114.1747';
  locs['Istanbul'] = 'lat=41.0136&lng=28.9550';
  locs['Kuala Lumpur'] = 'lat=3.1333&lng=101.6833';
  locs['London'] = 'lat=51.5072&lng=0.1275';
  locs['Miami'] = 'lat=25.7753&lng=80.2089';
  locs['NYC'] = 'lat=40.7127&lng=74.0059';
  locs['Paris'] = 'lat=48.8567&lng=2.3508';
  locs['San Diego'] = 'lat=32.7150&lng=117.1625';
  locs['Singapore'] = 'lat=1.3000&lng=103.8000';

  for (var i in locs){ if (i == newLocation){var latLong = locs[i];}}
    url = ('https://api.instagram.com/v1/media/search?' 
      + latLong + 
      '&client_id=a64531c6c9da41248aa4a180947ef682');
  console.log(url);
     
      $.ajax({
       type: "GET",
       dataType: "jsonp",
       cache: false,
       url: url        
   }).success(function(data) {
       console.log( data );
       $.each(data.items, function(i,item){
        $( '<li><img src="'+item.images.thumbnail.url+'"></li>' ).appendTo( '.images-container ul' )
         // $('.images-container ul').appendTo('<li><img src="'+data.thumbnail+'"></li>');
         // $("< img/>").attr("src", item.media.m).appendTo("#flickrapi-results");
         if ( i == 10 ) return false;

   //  $.ajax({
   //     type: "GET",
   //     dataType: "jsonp",
   //     cache: false,
   //     url: url        
   // }).success(function(data) {
   //     $.each(data.items, function(i,item){
   //       $("< img/>").attr("src", ('<li><img src="'+i.images.thumbnail.url+'"></li>')).appendTo(".images-container ul");
   //       // $('.images-container ul').appendTo('<li><img src="'+data.thumbnail+'"></li>');
   //       // $("< img/>").attr("src", item.media.m).appendTo("#flickrapi-results");
   //       if ( i == 10 ) return false;
     })
     })
     });


});


// function(data) {
//   $.each(data.items, function(i,item){
//     $("< img/>").attr("src", item.media.m).appendTo("#flickrapi-results");
//     if ( i == 10 ) return false;
//   });
  // $.each(result[i].images.thumbnail.url, function(index, element) {
  //   $(".images-container ul").append("<li><img>"+result[i].images.thumbnail.url+"</img></li>"); 
  // var result = $.ajax({
  //       type: "GET",
  //       dataType: "jsonp",
  //       cache: false,
  //       url: url,        
  //   });

  // $.ajax(result.href, {
  //     success: function(data) {
  //       $.each(data.items, function(i,item){
  //         $("< img/>").attr("src", ('<li><img src="'+i.images.thumbnail.url+'"></li>')).appendTo(".images-container ul");
  //         // $('.images-container ul').appendTo('<li><img src="'+data.thumbnail+'"></li>');
  //         // $("< img/>").attr("src", item.media.m).appendTo("#flickrapi-results");
  //         if ( i == 10 ) return false;
  //     })
  //     }
  //     });


//   var result = $.ajax({
//         type: "GET",
//         dataType: "jsonp",
//         cache: false,
//         url: url,
//         success:(function(){$.each(result[i].images.thumbnail.url, function(index, element) {
//     $(".images-container ul").append("<li><img>"+result[i].images.thumbnail.url+"</img></li>")})        
//     })
// });

  // return result;

// function displayImages(result) {
//   var imagesElem = $('.images-container').clone();
//   // $('.info-container h1').empty().append('<span style="color:#ffcf35">' + newLocation + '</span>');
//   // $('.images-container ul').empty().append('<li><img src="http://bighugelabs.com/img/lolcat-sample.jpg" alt=""></li>');
//   var imgThumb = result.find('thumbnail')
//       .attr('href', images.thumbnail.link);
//   var imgThumb = result.find['thumbnail'].attr

//   console.log(imgThumb);
//   $(".images-container ul").append("<img>"+imgThumb+"</img>");

//   // for (var i = 0; i < 10; i++) {
//   //   $(".images-container ul").append("<a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
//   // }
// }





