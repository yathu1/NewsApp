import React, { useContext } from 'react';
import { NewsContext } from '../NewsContext';
import NewsArticle from './NewsArticle';
import Container from 'react-bootstrap/Container';
import { Col,Row } from 'react-bootstrap';


const myStyle = {
  marginLeft:'auto',
  marginRight:'auto',
  width:'100%'
};  

const News = (props) => {
  const data = useContext(NewsContext);

  return (
        
       <Container style={myStyle} className=" justify-content-center "  >
     
       <Row className="justify-content-center "  >
      
      {data ? (
        data.articles ? (
          data.articles.map((news,index) => (
            <Col md={4} sm={6} xs={12} className=" mt-3 mb-3" >
            <NewsArticle data={news} key={index} />
            </Col>
            
          ))
        ) : (
          "No articles available" // Handle the case when 'articles' is not present
        )
      ) : (
        "Loading..."
      )}
  
    </Row>
       </Container>

   
  );
}

export default News;
