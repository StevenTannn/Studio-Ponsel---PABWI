async function getData() {
    return await axios.get('http://the19am.com/uph/json/?p=gadget');
}

$('.promo').ready(async function () {
    let datas = await getData();
    console.log(datas)
    datas.data.forEach((data, idx) =>{
        if (idx % 2 === 0){    
        $(`div[id = '${data.cat}']`).append(`
            <div class="col-2.5 mt-5 ml-5">
            <div class="card" id='${data.kode}'>
        <img class="card-img" src="img/${data.kode}.jpg" style="width:200px;height: 150px;">
                <a href="#" class="stretched-link"></a>
        <div class="card-img-overlay d-flex justify-content-end">
          <a href="#" class="card-link text-danger like">
            <i class="fas fa-heart"></i>
          </a>
        </div>
        <div class="card-body">
          <h4 class="card-title" style="font-size: 13px;">${data.nama_produk}</h4>
        <p class="card-text" style="color: #60184c">
            IDR&nbsp;${data.price}
            </p>  
        <p class="card-text" style="color: red; margin-top:-20px;">
            PROMO 10% IDR&nbsp;${data.price-(data.price*0.1)}
            </p>
        </div>
        </div>
        </div> 
        `)}
    })
})
$('.promo').ready(async function () {
    let datas = await getData();
    console.log(datas)
    datas.data.forEach((data, idx) =>{
        if (idx % 2 === 0){    
        $(`div[id = '${data.cat}']`).append(`
            <div class="col-2.5 mt-5 ml-5">
            <div class="card" id='${data.kode}'>
        <img class="card-img" src="img/${data.kode}.jpg" style="width:200px;height: 150px;">
                <a href="#" class="stretched-link"></a>
        <div class="card-img-overlay d-flex justify-content-end">
          <a href="#" class="card-link text-danger like">
            <i class="fas fa-heart"></i>
          </a>
        </div>
        <div class="card-body">
          <h4 class="card-title" style="font-size: 13px;">${data.nama_produk}</h4>
        <p class="card-text" style="color: #60184c">
            IDR&nbsp;${data.price}
            </p>  
        <p class="card-text" style="color: red; margin-top:-20px;">
            PROMO 10% IDR&nbsp;${data.price-(data.price*0.1)}
            </p>
        </div>
        </div>
        </div> 
        `)}
    })
})
