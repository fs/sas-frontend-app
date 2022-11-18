function ProductsData(props){
    const {products}=props
    // check if there is any data
    if (products.length===0 || !products)
        return <p>No data is received</p>
    
        //map the appay with products to create a line for each one
    return(
        <table>
            <tr>
                <th>productName</th>
            </tr>
            <tbody>
                {products.map((product) =>
                <tr key={product.productName}>
                    <td>
                        {product.productName}
                    </td>
                </tr> 
            )}
            </tbody>
            
        </table>

    )
}
export default ProductsData;