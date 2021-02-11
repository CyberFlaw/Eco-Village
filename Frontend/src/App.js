import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <div class="container">  
        <form id="contact" action="" method="post">
            <h3>SELL PRODUCT</h3>
            <fieldset>
              <input placeholder="Product name" type="text" tabindex="1" required autofocus/>
            </fieldset>
            <fieldset>
              <input placeholder="Quantity" type="Number" tabindex="2" required/>
            </fieldset>
            <fieldset>
              <input placeholder="Expecting Price(KG)" type="Number" tabindex="4" required/> <span style={{padding :"2px"}}> TO </span>
              <input placeholder="Expecting Price(KG)" type="Number" tabindex="4" required/>
            </fieldset>
            <fieldset>
              <textarea placeholder="Description" tabindex="5" required></textarea>
            </fieldset>
            <label id="makeBold">Product Image</label><br/>
            <input type="file" name="fileToUpload" id="fileToUpload"/>
            <fieldset>
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
            </fieldset>
          </form>
      </div>
    </div>
  );
}

export default App;
