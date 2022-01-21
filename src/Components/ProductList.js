import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Article } from "./Article"
import Modal from 'react-modal';
import { AddArticle } from "./AddArticle"
import Button from 'react-bootstrap/Button'
import "./styles/Article.scss"
import { Navbar } from './Navbar';

export const ProductList = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);


    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:8080/products").then(({ data }) => setNews(data)).catch(error => console.log(error)).finally(() => { setLoading(false) })
    }, [])

    const newsItems = news.map((article, i) => {
        return (
            <Article title={article.title} content={article.content} imageURL={article.imageURL} price={article.price} key={i}>
                <Button>Delete</Button>
            </Article>
        )
    });
    return (
        <>
            {loading ? <h1>Loading..</h1> : <><Navbar></Navbar><p className="list-titles">Products</p><div className='item-menu'>{newsItems}</div></>}
            <Modal isOpen={modalIsOpen} onRequestClose={(() => { setModalIsOpen(false) })} style={{ overlay: { backgroundColor: "#8080805c", }, content: { marginTop: "50px", width: "750px", left: "50%", transform: "translateX(-50%)", borderRadius: "10px", overflowY: "hidden" } }} >
                <AddArticle onClose={(() => { setModalIsOpen(false) })}></AddArticle>
            </Modal>
            <Button onClick={(() => { setModalIsOpen(true) })} className="home-btn add">Add product</Button>
        </>
    )
}