const products = [
    { title: "Cabbage", id: 1 },
    { title: "Carrot", id: 2 },
    { title: "Potato", id: 3 },
    { title: "Tomato", id: 4 },
    { title: "Onion", id: 5 },
    { title: "Garlic", id: 6 }
]

export const List = () => {
    return (
        <>
            <h2>Lista de productos</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </>

    )
}