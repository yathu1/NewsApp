import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=54b7e3786dd240109009fb3e41d8e8a5`
        );
        const data = await response.json();
        setItemData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItemData();
  }, []);

  const viewNews = itemData?.articles.find((news) => news.title === decodedTitle);

  return (
    <Container className="mt-5">
      {viewNews ? (
        <Row>
        <Row>
          <Col md={12} className="text-center">
            <h1>{viewNews.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src={viewNews.urlToImage} alt="News Image" />
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Text>{viewNews.description}</Card.Text>
                <Card.Text> {viewNews.content}</Card.Text>
                <Card.Text>Published At: {new Date(viewNews.publishedAt).toLocaleDateString()}</Card.Text>
                <Card.Text>Source: {viewNews.source.name}</Card.Text>
          
                <Button variant="primary" onClick={() => window.history.back()}>Back to Home</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Row>
      ) : (
        <Row>
          <Col>
            <p>Loading...</p>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default NewsDetail;
