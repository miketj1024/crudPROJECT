

const URL_ENDPOINT = 'http://localhost:3000/shoeRoster'


$.get(URL_ENDPOINT).then(data => {
    data.map(shoe => {
      $('tbody ').append(
        $(`
        <tr>
        <td>${shoe.id}</td>
        <td>${shoe.brandName}</td>
        <td>${shoe.size}</td>
        <td><button onClick="deleteShoe(${shoe.id})">🗑</button</td>
        </tr>
        `)
      )
    })
  })

  $('#submitShoe').click(function () {
    $.post(URL_ENDPOINT,{
      brandName: $('#brandName').val(),
      size: $('#size').val(),
    })
  })

  function deleteShoe (id) {
    $.ajax(`${URL_ENDPOINT}/${id}`, {
      type: "DELETE"
    })
}
    function updateShoeU () {
        let idd = $('#upShoeId').val()
        $.ajax(`${URL_ENDPOINT}/${idd}`, {
          method: 'PUT',
          data: {
            brandName: $('#upBrandName').val(),
            size: $('#upSize').val(),
          }
        })
      }
    
    $('#upSubmit').click(updateShoeU)