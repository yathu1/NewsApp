import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';

const NewsArticle = ({data}) => {
    const truncateText = (text, maxLength) => {
        if (text && text.length > maxLength) {
          return text.substring(0, maxLength) + '...';
        } else {
          return text;
        }
      };
      
      const encodedTitle = encodeURIComponent(data.title);
  return (

         
<Card style={{ width: 'auto',borderColor:'gainsboro' ,borderWidth:'5px',color:'black',height:'100%',padding:'10px'}} >
  <Row >
  <Link style={{ textDecoration:'none',color:'black',fontWeight:'bold' }} to={`/${encodedTitle}`} >{data.title}</Link>
  <Card.Text style={{color:'grey',marginBottom:'0'}}>By  {data.author} {data.source.name} </Card.Text>
  <Card.Text style={{color:'grey',marginTop:'0'}}>{new Date(data.publishedAt).toLocaleDateString()}</Card.Text>
  </Row>
    <Card.Body>
      <Row>
        <Col>
         <Card.Img className='mt-10' style={{marginLeft:'-14px'}} src={data.urlToImage} height={140} width={140} alt="news" />
         </Col>
         <Col>
        <Card.Text>{truncateText(data.description, 100)}</Card.Text>
        </Col>
      </Row>
    </Card.Body>
</Card>
  
 


  )
}

export default NewsArticle