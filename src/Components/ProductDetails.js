import axios from "axios";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { EditProduct } from "./EditProduct";
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";

export const ProductDetails = () => {
    const params = useParams();
    const [item, setItem] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8080/products/" + params.articleTitle).then(({ data }) => setItem(data)).catch(error => console.log(error))
    }, [params.articleTitle])

    const deleteItem = () => {
        axios.delete('http://localhost:8080/products/' + params.articleTitle)
            .then((res) => {
                const message = res.data;
                console.log(message);
                navigate('/products')

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <div className="container">
                <div className="card-item">
                    <div className="card-body">
                        <h3 className="card-title">{item.title}</h3>
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-6">
                                <div className="white-box text-center"><img src={item.imageURL} className="img-responsive" alt="" /></div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-6">
                                <h4 className="box-title mt-5">Product description</h4>
                                <p>{item.content}</p>
                                <h2 className="mt-5">
                                    {`$` + item.price}</h2>
                                <button className="btn btn-primary btn-rounded">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Button onClick={(() => { setModalIsOpen(true) })} className="home-btn">Edit product</Button>
                <Button onClick={deleteItem}>Delete</Button>

            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={(() => { setModalIsOpen(false) })} style={{ overlay: { backgroundColor: "#8080805c", }, content: { marginTop: "50px", width: "700px", left: "50%", transform: "translateX(-50%)", borderRadius: "10px", opacitiy: 1, overflowY: "hidden" } }}>
                <EditProduct onClose={(() => { setModalIsOpen(false) })} title={item.title} price={item.price} imageURL={item.imageURL} content={item.content}></EditProduct>
            </Modal>
        </>
    )
}