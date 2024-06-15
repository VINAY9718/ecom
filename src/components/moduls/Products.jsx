// import React, { useEffect, useState } from 'react'
// // import Button from 'react-bootstrap/esm/Button'
// // import CardBody from 'react-bootstrap/esm/CardBody'
// // import Container from 'react-bootstrap/esm/Container'
// // import { Card } from "react-bootstrap"

// const Products = ()=> {
//     const [items, setItems] = useState([ ])
    
// useEffect(() => {
//     fetch("http://localhost:4001/api/category")
// .then((res) => res.json())
// .then((data) => setItems(data))
// .catch((error) => console.log(error))
// },[])

//     return (
//         <>
        
//         <table>
//             <tr>
//                 <th>
//                     Title
//                 </th>
//                 <th>Description</th>
//             </tr>
//             {items.map((item) =>(
//                 <tr key={item._id}>
//                     <td>{item.title}</td>
//                     <td>{item.Description}</td>
//                 </tr>
//             ))}
//         </table>
//         {/* <Container>
//             {Item.map((elem) => {
//                 return (
//                     <Card>
//                         <Card.Title variant="top" src={process.env.PUBLIC_URL + elem.image} />
//                         <Card.Body>
//                             <Card.Title>{elem.product_name}</Card.Title>
//                             <Card.Text>${elem.price}</Card.Text>
//                             <Button>Buy now</Button>
//                         </Card.Body>
//                     </Card>
//                 )
//             })

//             }
//         </Container> */}
//         </>
//     )
// }

// export default Products


import React, { useEffect, useState } from 'react';
// import { Button, Container, Card } from 'react-bootstrap';

function Products() {
    const [items, setItems] = useState([
        // {
        //     id: 1,
        //     product_name: 'Product 1',
        //     price: 999,
        //     image: "/logo192.png"
        // },
        // {
        //     id: 2,
        //     product_name: 'Product 2',
        //     price: 9199,
        //     image: "/logo192.png"
        // },
    ]);

    useEffect(() => {
        fetch("http://localhost:4001/category") 
        .then((res) => res.json())
        .then((data) => setItems(data))
        .catch((error) => console.log(error));
    }, 
    []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Photo</th>

                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td><img alt="err" src={`4{item.thumbnail}`}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* <Container className="rows" style={{ display: "flex" }}>
                {items.map((elem) => {
                    return (
                        <Card key={elem.id} className="col-md-3">
                            <Card.Img variant='top' style={{ height: "200px", width: "200px" }} src={process.env.PUBLIC_URL + elem.image} />
                            <Card.Body>
                                <Card.Title>{elem.product_name}</Card.Title>
                                <Card.Text>${elem.price}</Card.Text>
                                <Button>Buy Now</Button>
                            </Card.Body>
                        </Card>
                    );
                })}
            </Container> */}
        </>
    );
}

export default Products;