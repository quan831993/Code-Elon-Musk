// Module 
// Javascript

// I. Data types

// Primitive types (Nguyên thủy) và Referrence types (Đối tượng)

// A. Primitive types
// String
// Number
// Boolean
// Null
// Undefined
// ...

// B. Referrence types
// Array
// Object
// Function

// 1. String (chuỗi)
// a. Cú pháp
// let fullName = "Tony Stark";
// let school = 'Rikkei Academy';
// let adress = `36 Mễ Trì`;

// template string (backtick)
// - Có thể truyền biến vào template string thông qua ${}
// - Ngoài ra thì có thể xuống dòng ở trong template string
// let sentence = `Hello, my name is ${fullName}. I go to school at ${school}`;

// b. String concatenation (Nối chuỗi) -> +
// Ngoài ra có thể nối chuỗi bằng template string

// 2. Number (Số) 
// a. Mathematic operators (Toán tử toán học)
// +, -, *, /, %, **

// b. Math Object basic methods
// Là 1 đối tượng trong js để dùng tính toán những phép tính nâng cao
// Math.floor() (Làm tròn xuống)
// math.ceil() (Làm tròn lên)
// Math.random() (Lấy ra 1 số ngẫu nhiên từ 0 -> 0.9999999)
// Math.sqrt()  (Căn bậc 2 của 1 số)
// ...

// 3. Boolean (true/false)
// let isValidate = true;
// let isVisible = false;

// a. Mệnh đề so sánh, các toán tử so sánh;
// ==, >=, <=, >, <, !=, ===, !==

// == vs ===
// Ko chặt chẽ vs chặt chẽ
// 1 == "1"    // true
// 1 === "1"   // false

//Tương tự như ở dưới
// != vs !==

// b. Kết hợp các mệnh đề so sánh thông qua toán tử and (&&) và or (||)

// && --> Kết quả của mệnh đề so sánh and là true khi và chỉ khi 2 vế của mệnh đề cùng là true
// 1 > 0 && 1 < 2 (true)

// || --> Kêt của mệnh đề so sánh or là true khi chỉ cần 1 trong 2 vế của mệnh đề là true
// 1 > 0 || 1 > 2 (true)

// c. Branching statement (Câu điều kiện rẽ nhánh)
// c1.
// if (condition1) {
//     // do something 1
// } else if (condition2) {
//     // do something 2
// } else if (condition3) {
//     // do something 3
// } else {
//     // do something else
// }

// c2. (switch/case) --- giống y hệt if/else
// Tự demo (tự viết ví dụ)
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// 4. Loop (Vòng lặp)
// Dùng để lặp đi lặp lại 1 đoạn code nào đó với số lần biết trước hoặc ko biết trước

// Với số lần biết trước (for/ while/ do-while)

// Với số lần ko biết trước (while/ do-while)

// a. For loop
// for (begin; end; step) {
//     // Logic
// }
// Bộ 3 điều kiện lặp
// Điểm bắt đầu/ Điểm kết thúc/ Bước nhảy
// for (let i = 0; i < 10; i++) {
//     console.log("Hello World");    
// }

// Lần lặp 1: i = 0; i < 10 (true) -> Thực hiện logic, i = 0 + 1 = 1
// Lần lặp 2: i = 1; i < 10 (true) -> Thực hiện logic, i = 1 + 1 = 2
// Lần lặp 3: i = 2; i < 10 (true) -> Thực hiện logic, i = 2 + 1 = 3
// Lần lặp 4: i = 3; i < 10 (true) -> Thực hiện logic, i = 3 + 1 = 4
// ....
// Lần lặp 9: i = 8; i < 10 (true) -> Thực hiện logic, i = 8 + 1 = 9
// Lần lặp 10: i = 9; i < 10 (true) -> Thực hiện logic, i = 9 + 1 = 10
// Lần lặp 11: i = 10; i < 10 (false) -> Thoát khỏi vòng lặp

// b. while loop
// Miễn là condition === true => Vòng lặp vẫn luôn chạy
// while (condition) {
//     // do something
// }

// Vòng lặp while sẽ chạy cho đến khi nào chúng ta thoát khỏi vòng lặp

// b1. Thoát khỏi vòng lặp
// break;
// while (true) {
//     console.log("Hello world");
//     // Tại 1 thời điểm nào đó trong tương lai 1 điều kiện if xảy ra
//     if (condition) {
//         break;
//         // Thoát khỏi vòng lặp
//     }
// }

// Sử dụng 1 biến để kiểm soát vòng lặp
// let loop = true;
// while (loop) {
//     console.log("Hello world");
//     // Tại 1 thời điểm nào đó trong tương lai 1 điều kiện if xảy ra
//     if (condition) {
//         loop = false
//         break;
//         // Thoát khỏi vòng lặp
//     }
// }

// 5. Array - List - Mảng (Danh sách)
// Mảng - Danh sách thông thường sẽ chứa các phần tử con có tính chất tương đồng nhau

// 1 danh sách tên học sinh
// 1 danh sách các số điện thoại
// 1 danh sách địa chỉ nhà
// ...

// a. Khai báo mảng
// let numbers = [1, 2, 3, 4, 5];
// let names = ["A Thuận", "A Cường", "Trường"];

// b. Index (Chỉ số), Element (Phần tử), Length (Độ dài của mảng)
// let names = ["A Thuận", "A Cường", "Trường", "A Hai"];      // 4 - length
// Index:       0           1           2       names.length - 1               

// c. Các thao tác C/R/U/D với mảng
// Creat (Thêm)
// .push(newElement) - Thêm cuối
// .unshift(newElement) - Thêm đầu
// .splice(index, 0, newElement) - Thêm vào vị trí index trong mảng
// names.splice(1,0,"Luật");
// console.log(names);

// Read (Đọc)
// Read one (Lấy ra 1 phần tử)
// names[index]
// let a = names[0];

// Read all (Lấy ra toàn bộ phần tử)
// for (let i = 0; i < names.length; i++) {  
//     console.log(i, names[i]);
// }

// names.forEach(function (element, index) {
//     console.log(index, element);
// })

// for ... of (Duyệt qua mảng ko quan tâm đến chỉ số index)
// for (const name of names) {
//     console.log(name);
// }

// Update (Cập nhật)
// Lấy ra phần tử muốn update và gán cho nó giá trị mới
// names[0] = newElement;
// names[2] = newElement;

// Delete (Xóa)
// .pop() - Xóa cuối
// .shift() - Xóa đầu
// .splice(index, number) - Xóa number phần tử tại vị trí index

// 6. Object (Đối tượng)
// Là 1 kiểu dữ liệu dùng để miêu tả 1 đối tượng nào đó trong thực tế

// let person = {
//     name: "A Hai",
//     age: 18,
//     job: ["Teacher", "Coder"],
//     single: false,
//     address: "36 Mễ Trì",
// }

// properties (Thuộc tính) - Mô tả tính chất của đối tượng
// key: value

// a. Các thao tác C/R/U/D với object
// Creat (Thêm) - ., []
// Gọi thuộc tính ra và gán cho nó 1 value
// person.hobbies = ["AOE", "Half life"];
// person["billiard"] = "Gà CN";
// console.log(person);

// Read (Đọc) - ., []
// Read one
// console.log(person.address);
// console.log(person["hobbies"]);

// Read all - Lấy ra toàn bọo thuộc tính
// for ... in
// for (const key in person) {
//     console.log(key, person[key]);
// } 

// Update (Cập nhật) - Gọi thuộc tính ra và gán cho nó 1 giá trị mới
// person.name = "Quốc Hai ĐZ"

// Delete (Xóa)
// delete person.billiard

// 7. Function (Hàm)
// Đóng gói 1 đoạn logic code nào đó để có thể tái sử dụng lại trong tương lai

// Function có thể có đầu vào (input) hoặc ko
// Function có thể có đầu ra (output) hoặc ko 

// a. Khai báo hàm (Function declaration)
// function printSum(a, b, c) {
//     console.log(a + b + c);
// output = return
// }
// input: parameters (Tham số)

// b. Thực thi hàm (Function execution)
// input: argument (Đối số)
// printSum(1, 2, 3);


// 8. HTML (Hyper Text Markup Language)
// Ngôn ngữ đánh dấu siêu văn bản

// a. Cú pháp
// Thẻ đầy đủ
//<tag attribute = "value" attribute2 = "value2" ...>Content</tag>\
// VD:
// <h1>Hello world</h1>

// Thẻ ko có content
//<tag attribute = "value" attribute2 = "value2" .../>
// VD:
// - <img src="..." alt="..."/>
// - <input name="..." value= "..."/>

// b. Inline element vs Block element
// Inline -> Sẽ có width + height bọc lấy content ở phía trong

// Block -> Sẽ có width kéo dài toàn bộ browser

// => 2 thẻ block nằm cạnh nhau sẽ ko đủ độ dài nằm trên cùng 1 dòng -> Bị đẩy xuống dòng

// => 2 thẻ inline nằm cạnh nhau vẫn đủ chỗ nằm trên cùng 1 dòng

// c. 1 số thẻ inline hay sử dụng

// inline: span, b, strong, i, em, u, delete, label, input, a, button

//block:
// - div, p , h1 - 6, img, form, ul>li, br, hr ...

// Special:
// - img (Show ảnh)
// - a(Link)
// - form - label/input (Gửi dữ liệu)

// 9. CSS

// a. Basic CSS Selector

// - Name tag (thẻ tên)
// - id
// - class

// b. CSS specificity (Thứ tự ưu tiên của các selector)
// http://css-tricks.com/specifics-on-css-specificity/

// id > class

// .parent > .grand-child (Con trực tiếp)

// NOTE:
// - Ưu tiên sử dụng class để có thẻ select HTML để tránh xung đột thứ tự ưu tiên

// - Khi select các thẻ HTML sang CSS thì phải có gốc gác của nó

// VD: .grandfather .parent .child

// - Khi sử dụng class đơn lẻ thì class đó sẽ mang ý nghĩa là được tái sử dụng
// - .btn-style

// c. Reset CSS
// Toàn bộ những thẻ HTML đều có padding margin mặc định
// Những thông số đấy sẽ ảnh hưởng đến việc style giống với bản thiết kế
// *{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }

// d. Basic CSS properties (Thuộc tính CSS cơ bản)

// d1. font
// - font-size, font-weight, font-family ...

// d2. color
// plain english (white, black, blue, red ...)
// hex code (#fff, ...)
// rgb (100, 0, 255) (red, green, blue) [0 - 255]
// rgba (r, g, b, a) - a === opacity [0 - 1]

// d3. background
// - background-color:
// Thông thường muốn set background cho 1 thẻ thì các thuộc tính background sẽ đi theo bộ
// - background-image: url()
// - background-size: cover
// - background- position: center center
// - background- repeat: no-repeat

// d4. text
// text-align: center/left/right
// text-decoration: none

// d5. list (ul > li)
// list-style-type: none

// d6. box model
// margin
// padding 
// width
// height
// border
// box-sizing: border-box!!!/content-box

// d7. position

// position: absolute!!!, relative!!!, fixed ...
// z-index (thứ tự hiển thị)

// Toàn bộ những thuộc tính trên là những bộ thuộc tính dùng để style cho các web component

// Những bộ thuộc tính dùng để layout các component thành cột và dòng trên tran web

// Flexbox
// Ôn lại flexfroggy

// Khi sử dụng flexbox để layout cho các phần tử con (child1, child2, child3 ...) nằm trong 1 phần tử cha (parent)
// Chúng ta sẽ áp dụng các thuộc tính flexbox lên phần tử cha

// display: flex
// flex-direction: column/row ... (Hướng flex của các phần tử con)
// justify-content: center/flex-start/flex-end/space-between/space-around/space ... 
// (Căn cứ các phần tử con theo hướng flex-direction)

// align-items: center/flex-start/...
// (Căn cứ các phần tử con theo hướng vuông góc với flex-direction)

// Ngoài ra còn 1 số thuộc tính khác

// layout dựa trên hệ thống row col của các thư viện  front-end cho đơn giản

// e. Thư viện frontend Bootstrap
// Đọc document
// Chủ yếu các thư viện frontend đều được chia ra làm các phần

// e1. Các component được built sẵn
// Navbar, card, accordion, alert, message, carousel ...
// => Chỉ đọc document và tái sử dụng ại các component build sẵn

// e2. Hệ thống phân chia layout theo row và col (1 dòng có 12 cột)

// e3. Hệ thống eoww col cũng hỗ trợ responsive thông qua các size màn hình (xl, l, md, s, xs ...)

// f. Responsive()
// media query

// Chúng ta sẽ style cho các component tùy theo kích cỡ của từng màn hình
// X-Small              none    < 576px
// Small                sm      >= 576px
// Medium               md      >= 769px
// Large                lg      >= 992px
// Extra large          xl      >= 1200px  
// Extra extra large    xxl     >= 1400px


// 10. DOM - Document Object Model

// document
// Là 1 object trong js mà thông qua nó ta có thể truy vấn đến các thẻ HTML thông qua các method (phương thức) được build sẵn

// a. Query HTML
// document.getElementById(id) -> Trả về 1 thẻ HTML element
// document.getElementByClassName(class) -> Trả về 1 HTML collection (Gần giống với 1 mảng trong js)
// 1 HTML collection cũng có index (chỉ số, và length (Độ dài)
// -> Có thể truy xuất đến từng phần tử con thông qua [index]
// -> Có thể sử dụng vòng lặp for để duyệt qua toàn bộ các phần tử con thông qua biến chạy i
// -> Ko thể sử dụng các phương thức thông thừng của các mảng để thao tác với HTML collection

// document .getelementByTagName(tagname(tên thẻ))
// -> Trả về 1 HTML collection

// document.querySelector(#id, .class)
// -> Trả về 1 phần tử đầu tiên
// Tương tự như HTML collection

// documnet.querySelectorAll (#id, .class)
// Trả về 1 NodeList
// Gần giống HTML collection

// b. Basic DOM properties (Thuộc tính dom cơ bản)
// NOTE: Bởi đây là thuộc tính nên ta có thể update giá trị mới cho các thuộc tính này bằng phép gán (dấu "=")

// b1. .innerText, .textContent, .innerHTML
// let app = document.getElementById("app");
// let app2 = document.getElementById("app2");
// console.log(app.innerText);
// console.log(app.textContent);
// console.log(app.innerHTML);
// console.log(app2.innerText);

// .innerText
// Sẽ chỉ lấy ra nội dung là text từ những thẻ visible (những thẻ hiện ra)
// Ko lấy text từ những thẻ ko hiện ra (display: none, visibility: hidden)
// innertext sẽ trả về cả style
// Khi 1 thẻ bị display: none (Xóa khỏi phần hiển thị của trình duyệt) thì innerText sẽ trả về nội dung 
// là text giống như textContent

// .innerHTML (Lấy ra nội dung là HTML của 1 thẻ bất kỳ)

// b2. .styleb (inline-style)
// -> Lấy ra bộ object chứa toàn bộ inline style của 1 thẻ HTML được viết dưới dạng camelCase

// VD: (background-color) => (backgroundColor)

// b3. External style => getComputedStyle(HTMLelement) (Đây là 1 phương thức của window)

// window.getComputedStyle - getComputedStyle(HTMLelement)

// b4. .classist
// -> Lấy ra 1 DOMTokenList (Gần giống 1 mảng)
// -> DOMTokenList cũng có index, length => Có thể truy cập vào các phần tử con ở bên trong thông qua [index]
// hoặc duyệt thông qua vòng lặp for(i)
// -> Chứa toàn bộ các class của 1 HTMLelement

// classList.add(),  classList.remove() và  classList.toggle()
// Thêm class mới       Xóa class đi        Tự động kiểm tra xem có class chưa để thêm hoặc xóa

// VD: Click vào btn "Click me!!"
// Mỗi lần click thay đổi màu sắc của h1 thành màu đỏ
// Lần click thứ 2 thì xóa màu bg đó đi và trở lại bình thường

// let h1 = document.querySelector(".demo-computed");
// let btn = document.querySelector("#btn");

// btn.onclick = function () {
//     // Sử dụng thuộc tính style (Đối với style ngắn)
//     // if (h1.style.backgroundColor != "red") {
//     //     h1.style.backgroundColor = "red";
//     // } else {
//     //     h1.style.backgroundColor = "";
//     // }

//     // Sử dụng class để thao túng style (Đối với style dài)
//     // if (h1.classList.contains("custom-bg")) {
//     //     h1.classList.remove("custom-bg");
//     // }else{
//     //     h1.classList.add("custom-bg")
//     // }

//     h1.classList.toggle("custom-bg");
// }

// b5. .getAttribute()
// src, href, alt ...
// Lấy ra attribute nói chung (Tất cả các thể loại attribute kể cả class)
//     .setAttribute("att_name", "value")
// Set giá trị attribute mong muốn

// 6. Traversing DOM Element
// Di chuyển lên xuống giữa các HTML element
// .children -> HTMLCollection (Tập hợp các phần tử con)
// .parentElement
// let ul = document.getElementById("list");
// let li = ul.children[0];
// console.log(li.parentElement);

// c. Basi DOM methods (phương thức cơ bản)

// c1.
// document.createElement("name_tag")
// Tạo ra 1 thẻ HTML chưa nằm ở trong DOM (Nó được tạo ra và chưa được append vào bất kỳ vị trí nào trong file HTML)
// VD:
// let li = document.createElement("li");
// console.log(li);
// let ul = document.getElementById("list");
// ul.appendChild(li);

// c1. .appendChild(HTMLelement)

// c3. .remove()
// li.remove();
// ul.children[0].remove();

// d. Basic DOM events (Sự kiện cơ bản trong DOM)
// d1. Click Event

// let btn = document.getElementById("btn");

// btn.onclick = function () {
//     alert("Alo")
// }

// btn.addEventListener("Event Type", Callback)
// btn.addEventListener("click", function () {
//     alert("Alo!!")
// })

// d2. Form event
// Form dùng để gửi dữ liệu từ các thẻ input nằm bên trong nó đến 1 endpoint nhất định
// Hành động gửi dữ liệu đó được gọi là submit event

// let form = document.getElementById("main-form");

// form.onsubmit = function (event) {
//     // event object
//     // Ngăn chặn sự kiện mặc định của thẻ
//     event.preventDefault();
//     let email = form.email.value;
//     let password = form.password.value;
//     console.log(email, password);
// }

const product = [
    {
        id: 1,
        image: "image/L.A Home (5bd, 6ba).jpg",
        name: "L.A Home (5bd, 6ba)",
        price: 6000000,
        priceShow: "USD 6.000.000"
    },
    {
        id: 2,
        image: "image/L.A Mega Mansion (8 bd, 20 ba).jpg",
        name: "L.A Mega Mansion (8 bd, 20 ba)",
        price: 52000000,
        priceShow: "USD 52.000.000",
    },
    {
        id: 3,
        image: "image/M1 Abrams.jpg",
        name: "M1 Abrams",
        price: 8000000,
        priceShow: "USD 8.000.000",
    },
    {
        id: 4,
        image: "image/Mega Yatch.jpg",
        name: "Mega Yatch",
        price: 300000000,
        priceShow: "USD 300.000.000",
    },
    {
        id: 5,
        image: "image/Modern Building (35 condos + 10 Offices).jpg",
        name: "Modern Building (35 condos + 10 Offices)",
        price: 12000000,
        priceShow: "USD 12.000.000",
    },
    {
        id: 6,
        image: "image/Paris Luxury Apartment(3 bd, 3 ba).jpg",
        name: "Paris Luxury Apartment(3 bd, 3 ba)",
        price: 3200000,
        priceShow: "USD 3.200.000",
    },
    {
        id: 7,
        image: "image/Produce a Hollywood Movie.jpg",
        name: "Produce a Hollywood Movie",
        price: 90000000,
        priceShow: "USD 90.000.000",
    },
    {
        id: 8,
        image: "image/Regular Modern Apartment (3 bd, 2 ba).jpg",
        name: "Regular Modern Apartment (3 bd, 2 ba)",
        price: 320000,
        priceShow: "USD 320.000",
    },
    {
        id: 9,
        image: "image/Sailboat.jpg",
        name: "Sailboat",
        price: 130000,
        priceShow: "USD 130.000",
    }
]


function showProduct() {
    let list=document.getElementById("list-product");
    let listShow="";
    for (let i = 0; i < product.length; i++) {
        listShow+= `
        <div class="element">
                <img src="${product[i].image}" alt="">
                <p id="name">${product[i].name}</p>
                <p id="priceShow">${product[i].priceShow}</p>
                <div class="buyAndSellContainer">
                    <button class="btn-sell" id="sell">Sell</button>
                    <span class="amount" id="amount">0</span>
                    <button class="btn-buy" id="buy">Buy</button>
                </div>
            </div>
        `
    }
    list.innerHTML=listShow;
}
showProduct();
let btnBuy = document.querySelectorAll(".btn-buy");
let btnSell = document.querySelectorAll(".btn-sell");
let remaining = 217000000000;
let totalMoney = document.getElementById("totalMoney");
let percent = "";
let percentageLeft = document.getElementById("percent");
let span = document.querySelectorAll(".amount");
for (let index = 0; index < btnBuy.length; index++) {
    let count = 0;
    btnBuy[index].onclick=()=> {
        count++
        span[index].innerHTML = count;
        remaining =  remaining - product[index].price;
        totalMoney.innerHTML = `Remaining: $${new Intl.NumberFormat('de-DE').format(remaining)}`;
        percent = (1-remaining/217000000000)*100;
        let base = 10**6;
        let percentConverted = Math.round(percent * base) / base;
        percentageLeft.innerHTML = `You only spent ${percentConverted} % of the total!`;
    }

    btnSell[index].onclick=() => {
        if (count == 0) {
            return;
        }
        count--;
        span[index].innerHTML = count;
        remaining = remaining + product[index].price;
        totalMoney.innerHTML = `Remaining: $${new Intl.NumberFormat('de-DE').format(remaining)}`;
        percent = (1-remaining/217000000000)*100;
        let base = 10**6;
        let percentConverted = Math.round(percent * base) / base;
        percentageLeft.innerHTML = `You only spent ${percentConverted} % of the total!`;
        if (percent == 0) {
            percentageLeft.innerHTML = "You haven't spent a single dollar! start buying!"
        }  
    }
}
btnSell.onclick = function () {
    if (span == 0) {
        btnSell.classList.remove("btn-sell");
        btnSell.classList.add("btn-sell2");
    } else {
        btnSell.classList.remove("btn-sell2");
        btnSell.classList.add("btn-sell");
    }
}