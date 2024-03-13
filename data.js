var listRoom = [
    {
        id: "1",
        name: "Phong A",
        price: "250.000",
        firstDate: "15-04-2024",
        endDate: "19-04-2024",
        image: "https://th.bing.com/th/id/R.fef9f63136d06c6ff2247449d087c3ae?rik=j2jHyhAm%2fyqnAQ&pid=ImgRaw&r=0&sres=1&sresct=1",
    },
    {
        id: "2",
        name: "Loai B",
        price: "250.000",
        firstDate: "15-04-2024",
        endDate: "19-04-2024",
        image: "https://th.bing.com/th/id/R.fef9f63136d06c6ff2247449d087c3ae?rik=j2jHyhAm%2fyqnAQ&pid=ImgRaw&r=0&sres=1&sresct=1",
    },
    {
        id: "3",
        name: "Phong tang 3",
        price: "250.000",
        firstDate: "15-04-2024",
        endDate: "19-04-2024",
        image: "https://th.bing.com/th/id/R.fef9f63136d06c6ff2247449d087c3ae?rik=j2jHyhAm%2fyqnAQ&pid=ImgRaw&r=0&sres=1&sresct=1",
    },
    {
        id: "4",
        name: "Phong tang 4",
        price: "250.000",
        firstDate: "15-04-2024",
        endDate: "19-04-2024",
        image: "https://th.bing.com/th/id/R.fef9f63136d06c6ff2247449d087c3ae?rik=j2jHyhAm%2fyqnAQ&pid=ImgRaw&r=0&sres=1&sresct=1",
    },
    {
        id: "5",
        name: "Phong K",
        price: "250.000",
        firstDate: "15-04-2024",
        endDate: "19-04-2024",
        image: "https://th.bing.com/th/id/R.fef9f63136d06c6ff2247449d087c3ae?rik=j2jHyhAm%2fyqnAQ&pid=ImgRaw&r=0&sres=1&sresct=1",
    }
];

function redirectToPage(url) {
    window.location.href = url;
}

function listProducts() {
    for (let i = 0; i <= listRoom.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + listRoom[i].image + '" class="card-img-top" style="height: 400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + listRoom[i].name + '</h5>';
        demo += '<p class="card-text">' + listRoom[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt Phòng</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("listDisplay").innerHTML += demo;
    }
}

document.getElementById('create').addEventListener('submit', function(e) {
    e.preventDefault(); 
    var idRoom = document.getElementById('idRoom').value;
    var name = document.getElementById('name').value;
    var price = document.getElementById('price').value;
    var firstDate = document.getElementById('firstDate').value;
    var endDate = document.getElementById('endDate').value;
    var image = document.getElementById('image').value;


    if (idRoom === '' || name === '' || price === '' || firstDate === '' || endDate === '' || image === '') {
      alert('Vui lòng nhập đầy đủ thông tin điểm');
      return;
    }
    console.log(idRoom);
    listRoom.push({idRoom, name, price, firstDate, endDate, image});
    alert('Tạo phòng thành công!');
    redirectToPage("home.html");
  });

  function handleSearch() {
    var nameSearch = document.getElementById('nameSearch').value;
    console.log(nameSearch);
    let listSearch = listRoom.filter(item => item.name.includes(nameSearch));
    for (let i = 0; i <= listSearch.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + listSearch[i].image + '" class="card-img-top" style="height: 400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + listSearch[i].name + '</h5>';
        demo += '<p class="card-text">' + listSearch[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt Phòng</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("listDisplay").innerHTML += demo;
    }
  }