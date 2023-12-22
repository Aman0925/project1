let shoesDatabase = [];

function show(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const shoe = {name,email,number };
    shoesDatabase.push(shoe);

    alert('Shoe added successfully!');
}

function land(){
        const showfile = document.getElementById('showfile');
        showfile.innerHTML = '<h2>Shoes in the Database</h2>';
    
        if (shoesDatabase.length === 0) {
            showfile.innerHTML += '<p>No shoes in the database.</p>';
        } else {
            shoesDatabase.forEach((shoe, index) => {
                showfile.innerHTML += `
               
                <table border="1px solid red" color="blue">
                <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>number</th>
                </tr>
                <tr>
                <td> ${index + 1}. </td><br>
                <td>  ${shoe.name},</td><br>
                <td>  ${shoe.email},</td><br>
                <td> ${shoe.number}, </td><br>
                </tr>
                </table>
                    `;
            });
        }
    }
    