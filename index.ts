/* 
* EN: 
* This is example of how we run parallel program.
* In real life, parallel is like something we do when ordering food & drink in Restaurant or Cafe.
* Imagine, we went to Gustea and order some Drink, the waiter going to ask us what kind of drink we are going to order.
* After that, the order is went to the kitchen told other Staff to make the drink.
* While waiting the drink is ready, we usually do other activites such as open laptop, open code editor, etc.

* ID:
* Ini adalah contoh bagaimana cara menjalankan program secara paralel.
* Dalam kehidupan nyata, contoh kegiatan parallel adalah ketika kita memesan makanan & minuman di suatu restaurant ataupun cafe.
* Misal, kita pergi ke Gustea dan memesan minuman, seorang pelayan akan bertanya kepada kita, jenis minuman apakah yang akan kita hendak pesan.
* Setelah itu, pelayan akan pergi ke dapur dan memberi tau staff lain untuk membuatkan minuman kita.
* Sambil menunggu minuman kita datang, kita bisanya melakukan aktifitas lain seperti membuka laptop, membuka code editor & ngoding.
* Kegiatan inilah yang dinamakan parallel

*/

const API_URL: string = "http://example.com/api/v1/"

/*
* EN:
* For calling / consume API, we can use keyword "fetch()". It returned promise type.

* ID:
* Untuk memanggil / menggunakan API, kita bisa menggunakan kata kunci "fetch()". Hasil kembaliannya adalah promise.

*/

fetch(API_URL).then((result):void => {
    console.log(result)
})

/*
* Or we can use async & await as well
*/

const foo = async() => {
    const call = await fetch(API_URL)
    console.log(foo)
}

foo()