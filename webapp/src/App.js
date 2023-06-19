import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Container, Card, Checkbox,Menu } from 'semantic-ui-react';
import './index.css';
const PriceRangeForm = () => {
  const [lowerPrice, setLowerPrice] = useState('');
  const [upperPrice, setUpperPrice] = useState('');
  const [isGaming, setIsGaming] = useState(false);
  const [isMacBook, setIsMacBook] = useState(false);
  const [laptops, setLaptops] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let apiUrl = `http://127.0.0.1:8000/laptopinrange/${lowerPrice}/${upperPrice}/`;
      //let apiUrl = `http://localhost:5000/laptopinrange/${lowerPrice}/${upperPrice}/`;

      if (isGaming) {
       apiUrl = `http://127.0.0.1:8000/gaminglaptop/${lowerPrice}/${upperPrice}/`;
       // apiUrl = `http://localhost:5000/gaminglaptop/${lowerPrice}/${upperPrice}/`;

      }
      
      if (isMacBook) {
       apiUrl = `http://127.0.0.1:8000/mac/${lowerPrice}/${upperPrice}/`;
        //apiUrl = `http://localhost:5000/mac/${lowerPrice}/${upperPrice}/`;
      }
      if (isGaming && isMacBook) {
        setLaptops([{ id: -1, name: "MacBooks Are Not Meant For Gaming!!", price: "যা নেই তার আবার কিসের দাম" }]);
        return;
      }
      const response = await axios.get(apiUrl);
      setLaptops(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div style={{ position: 'relative', marginBottom: '2rem' }}>
        <Menu inverted color="black">
          <Menu.Item header as="h1">
            Laptop Kinbo
          </Menu.Item>
        </Menu>
        <Container>
          <h1 style={{ fontFamily: 'Segoe UI', fontSize: '26px', textAlign: 'center', color: 'Black' }}>
            Motivation
          </h1>
          <p style={{ fontFamily: 'Segoe UI', fontSize: '16px', textAlign: 'center' }}>
            The main motivation behind building "Laptop Kinbo" is to address the issue of fraud in the laptop market in
            Bangladesh. It is a common practice for dishonest shop owners to take advantage of customers who lack knowledge
            about the market prices and features of laptops. These shop owners often sell subpar laptops at inflated prices,
            leaving customers with no option but to make a bad purchase.
          </p>
          <h1 style={{ fontFamily: 'Segoe UI', fontSize: '26px', textAlign: 'center', color: 'Black' }}>
            API
          </h1>
          <p style={{ fontFamily: 'Segoe UI', fontSize: '16px', textAlign: 'center' }}>At Laptop Kinbo, we take pride in our commitment to transparency and innovation. Unlike any other platform in the market, we have opened up our backend API, allowing developers and enthusiasts to access our vast database of laptops and build their own applications. With our API, you can integrate real-time laptop data directly into your projects, creating stunning and personalized experiences. Whether you're a developer looking to enhance an existing app or an aspiring entrepreneur with a vision for the future, our API provides the foundation for endless possibilities. Explore our API documentation and discover the potential at <b>https://WecantAffordHosting.com/laptop/kinbo/api/ </b>. Unleash your creativity and redefine the way people interact with laptops in the digital era.
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Lower Price</label>
              <Input
                type="number"
                value={lowerPrice}
                onChange={(e) => setLowerPrice(e.target.value)}
                placeholder="Enter the least ammount of money you want to pay for a Laptop"
                className="ta"
              />
            </Form.Field>
            <Form.Field>
              <label>Upper Price</label>
              <Input
                type="number"
                value={upperPrice}
                onChange={(e) => setUpperPrice(e.target.value)}
                placeholder="Enter the most ammount of money you want to pay for a Laptop"
                className="ta"
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                label="Gaming"
                checked={isGaming}
                onChange={() => setIsGaming(!isGaming)}
                className="cb"
              />
             <Form.Field>
            <Checkbox
              label="MacBook"
              checked={isMacBook}
              onChange={() => setIsMacBook(!isMacBook)}
              className="cb"
            />
          </Form.Field>
            </Form.Field>
            <Button type="submit" color="black" primary className="black-button">
              Search
            </Button>
          </Form>
        </Container>
      </div>

      <Container>
        <h2 style={{ textAlign: 'center' }}>LaptopKinbo Suggests You To Buy</h2>

        <div style={{ position: 'relative' }}>
          {laptops.length === 0 ? (
            <p style={{ textAlign: 'center', fontFamily: 'Segoe' }}>Unfortunately, we could not find any suitable laptop for you.</p>
          ) : (
            <Card.Group itemsPerRow={4} centered>
              {laptops.map((laptop) => (
                <Card key={laptop.id}>
                  <Card.Content>
                    <Card.Header>{laptop.name}</Card.Header>
                    <Card.Description>Price: {laptop.price}</Card.Description>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          )}
        </div>
        <footer style={{ backgroundColor: 'black', color: 'white', padding: '10px', marginTop: '20px' }}>
          <p style={{ textAlign: 'center' }}>
            This page is powered by Laptop Kinbo API. If you would like to build your own app using our API, please visitaoi WhitePage for more information.
          </p>
          <p style={{ textAlign: 'center' }}>
            API Documentation: Coming Soon
          </p>
        </footer>
      </Container>
    </div>
  );
};

export default PriceRangeForm;
