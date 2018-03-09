$(() => {
  console.log('Loaded')
  $('#get_dogs').click(() => {
    fetch('/dogs')
      .then(data => {
        return data.json();
      }).then(data => {
        console.log(data);
        let str = '';
        data.dogs.forEach((dogs,i) => {
          // console.log('Iteration: ', i);
          str += `<li>${dogs.firstName} ${dogs.lastName}</li>`
        })
        $('#dogList').html(str);
      }) 
  })
  $('#add_dog').click(() => {
    fetch('/dogs', {method: 'POST'})
      .then(data => {
        return data.json();
      }).then(data => {
        console.log(data);
      }) 
  })
});
