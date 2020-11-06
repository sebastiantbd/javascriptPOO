class Product {
    //Propiedades (Variable)
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

//Metodos o //Acciones del OBJETO
class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Nombre del Producto</strong>: ${product.name} -
                    <strong>Precio del producto</strong>: ${product.price} - 
                    <strong>Año del Producto</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessage('Producto Eliminado Correctamente', 'success');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

//Eventos o Acciones
document.getElementById('product-form')
    .addEventListener('submit', function (e) {

        const name = document.getElementById('name').value,
            price = document.getElementById('price').value,
            year = document.getElementById('year').value;

        // Creando un nuevo Objeto 
        const product = new Product(name, price, year);
        const ui = new UI();

        // Validaciones
        if (name === '' || price === '' || year === '') {
            ui.showMessage('Ingrese Todos los Campos', 'danger');
        }

        // Guardar
        ui.addProduct(product);
        ui.showMessage('Producto Agregado correctamente', 'success');
        ui.resetForm();

        e.preventDefault();
    });

document.getElementById('product-list')
    .addEventListener('click', function (e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
        e.preventDefault();
    });