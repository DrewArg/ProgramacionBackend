import React from 'react'

function ProductForm() {
    return (
        <>
            <div class="contenedorForm">
                <h3 class="tituloSeccion">Ingresar Producto</h3>
                <form id="productForm">
                    <div class="contenedorInput">
                        <label class="formLabel">Ingrese el título</label>
                        <input class="formInput" type="text" placeholder="título" id="title" name="title" />
                    </div>

                    <div class="contenedorInput">
                        <label class="formLabel">Ingrese el precio</label>
                        <input class="formInput" type="number" placeholder="precio" id="price" name="price" />
                    </div>
                    <div class="contenedorInput">
                        <label class="formLabel">Ingrese la url de la imágen</label>
                        <input class="formInput" type="text" placeholder="url de imágen" id="thumbnail" name="thumbnail" />
                    </div>

                    <input type="submit" class="btn__submit" value="Add Product" />

                </form>
            </div>
        </>
    )
}

export default ProductForm