import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Container, Card, Checkbox, Menu } from 'semantic-ui-react';
import './index.css';

const InputForm = () => {
  const [recipeName, setRecipeName] = useState('');
  const [servingSize, setServingSize] = useState('');
  const [result, setResult] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [dairyProduct, setDairyProduct] = useState(0);
  const [salt, setSalt] = useState(0);
  const [potato, setPotato] = useState(0);
  const [vegetables, setVegetables] = useState(0);
  const [sugar, setSugar] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      /*
      // Make an API call to send the recipeName and servingSize to your backend
      const response = await axios.post('/api/joybanglaekhaneapiboshabi/result0ba1dibe', { servingSize, dairyProduct });
      const { data } = response;
       
      // Update the result state with the response from the backend
      setResult(data.result);
      */
      console.log(recipeName);
      console.log(servingSize);
      console.log(dairyProduct);
      console.log(salt);
      console.log(potato);
      console.log(vegetables);
      console.log(sugar);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTryUsClick = () => {
    setShowContent(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
        <Menu inverted color='white' primary className="mnu">
          <Menu.Item header as="h1" color='White'>
            <h1 color='white'>Bangladeshi Healthy Food Predictor</h1>
          </Menu.Item>
        </Menu>
        <Container>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="https://i.postimg.cc/Jz8hsrkT/bdlogo.png" alt="Our logo" height="310" width="310" />
          </div>
          <h1 style={{ fontFamily: 'Segoe UI', fontSize: '26px', textAlign: 'center', color: '#470f02' }}>
            About Us
          </h1>
          <p style={{ fontFamily: 'Segoe UI', fontSize: '16px', textAlign: 'justify', color: 'black' }}>
            We are Minions, a group of four students from NSU (North South University). Our project, Bangladeshi Healthy Food Prediction Model, is part of our CSE445 course project. We are passionate about promoting health and well-being through proper nutrition.

            For our project, we created a dataset completely from scratch. We collected Bangladeshi recipes from restaurants, home cooks, and blogs. To ensure the accuracy of our features, we surveyed 50 students from NSU, many of whom are from the pharmacy department. Additionally, we consulted with doctors to validate our findings.

            Our goal is to provide a reliable tool that can predict the healthiness of a recipe. We understand that not all ingredients are equally important for health, so we focus on the key ingredients that matter the most. To achieve accurate predictions, we utilized ensemble learning models.

            Thank you for using our Bangladeshi Healthy Food Predictor. We hope it helps you make informed decisions about your diet and leads you towards a healthier lifestyle.
          </p>
          {/* Try Us button */}
          {!showContent && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Button onClick={handleTryUsClick} inverted color="white" primary className="blue-button">
                Try Us
              </Button>
            </div>
          )}
          {/* Rest of the content */}
          {showContent && (
            <>
              <div>

                <h4 style={{ fontFamily: 'Segoe UI', fontSize: '20px', textAlign: 'center', color: '#470f02' }}>
                  Read This Before Giving Us the Data
                </h4>
                <p style={{ fontFamily: 'Segoe UI', fontSize: '16px', textAlign: 'justify', color: 'black' }}>We kindly request you to read the following instructions carefully before entering your recipe data. Our prediction model takes into account various factors to determine the healthiness of a recipe. To ensure accurate results, please adhere to the following guidelines:


                  <ul>
                    <li>Name: Enter the name of your recipe.</li>
                    <li>Servings: Specify the number of servings the recipe yields.</li>
                    <li>Dairy Product: If your recipe includes any dairy-related ingredients such as cheese, milk, ghee, clarified butter, or cream, please add them to this field.</li>
                    <li>Carbs: Include ingredients like flour, corn starch, bread, etc. in this field.</li>
                    <li>Salt, Potato, Vegetables, Sugar, Chicken, Oil, Beef, Fruits, Egg, Mutton, Rice, Carbs, Fish, Dried Fish: For each ingredient, enter the amount in grams. If an ingredient is absent in your recipe, leave that particular field empty </li>
                  </ul>
                  By providing accurate and detailed information, you help our prediction model make precise assessments of the healthiness of your recipe. Please don't hesitate to contact us if you have any questions or need further clarification.


                  Thank you for your cooperation and for using our Bangladeshi Healthy Food Predictor. We appreciate your commitment to promoting a healthier lifestyle through informed dietary choices.
                </p>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Field>
                  <label>Recipe Name</label>
                  <Input
                    type="text"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                    placeholder="Enter the recipe name"
                    className="ta"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Serving Size</label>
                  <Input
                    type="number"
                    value={servingSize}
                    onChange={(e) => setServingSize(e.target.value)}
                    placeholder="Enter the serving size"
                    className="ta"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Dairy Products</label>
                  <Input
                    type="number"
                    //value={dairyProduct}
                    onChange={(e) => setDairyProduct(e.target.value)}
                    placeholder="Enter the amount of Dairy Products in Grams"
                    className="ta"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Salt</label>
                  <Input
                    type="number"
                    //value={salt}
                    onChange={(e) => setSalt(e.target.value)}
                    placeholder="Enter the amount of Salt in Grams"
                    className="ta"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Potato</label>
                  <Input
                    type="number"
                    // value={potato}
                    onChange={(e) => setPotato(e.target.value)}
                    placeholder="Enter the amount of Potato in Grams"
                    className="ta"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Vegetables</label>
                  <Input
                    type="number"
                    // value={vegetables}
                    onChange={(e) => setVegetables(e.target.value)}
                    placeholder="Enter the amount of Vegetables in Grams"
                    className="ta"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Sugar</label>
                  <Input
                    type="number"
                    // value={sugar}
                    onChange={(e) => setSugar(e.target.value)}
                    placeholder="Enter the amount of Sugar in Grams"
                    className="ta"
                  />
                </Form.Field>

                <Button type="submit" color="black" primary className="black-button">
                  Search
                </Button>
              </Form>

              <Container>
                <h2 style={{ textAlign: 'center' }}>Our Prediction</h2>
                <div style={{ position: 'relative' }}>
                  {result === 1 && (
                    <Card.Group itemsPerRow={4} centered>
                      <Card color="green">
                        <Card.Content>
                          <Card.Header>{recipeName} is Healthy</Card.Header>
                        </Card.Content>
                      </Card>
                    </Card.Group>
                  )}
                  {result === 0 && (
                    <Card.Group itemsPerRow={4} centered>
                      <Card color="red">
                        <Card.Content>
                          <Card.Header>{recipeName} is Unhealthy</Card.Header>
                        </Card.Content>
                      </Card>
                    </Card.Group>
                  )}
                  {/*result === '' && (
                    <Card.Group itemsPerRow={4} centered>
                      <Card color="grey">
                        <Card.Content>
                          <Card.Header>Please Give The Data First</Card.Header>
                        </Card.Content>
                      </Card>
                    </Card.Group>
                  )*/}
                </div>
              </Container>
            </>
          )}
        </Container>
      </div>

      <footer style={{ backgroundColor: '#470f02', color: 'white', padding: '10px', marginTop: 'auto' }}>
        <p style={{ textAlign: 'center' }}>
          This WebApp was Created By Minions
        </p>
        <p style={{ textAlign: 'center' }}>
          Documentation: Coming Soon
        </p>
      </footer>
    </div>
  );
};

export default InputForm;
