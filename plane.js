let showdata = [];

function add() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const size = document.getElementById('size').value;
    const data1 = { brand, model, color, size };
    showdata.push(data1);
    alert("Add to cart successfully<br>try next items")
}
function show() {
    const result = document.getElementById('result');
    result.innerHTML = `<p> Add to cart </p><br>`
    if (showdata === 0) {
        result.innerHTML += ` <p> no items to add to cart</p>`

    } else {
        showdata.forEach((data1, index) => {
            result.innerHTML += `
            <p>
            ${index + 1}.
             brand:-${data1.brand},
             model:-${data1.model},
            color:-${data1.color},
            size:-${data1.size},
            </p>`
        });
    }
}

