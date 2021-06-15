import './App.scss';
import Greeting from "./components/Greeting";
import Category from "./components/Category";
import Subjectheader from './components/Subjectheader';
import Restaurants from './components/Restaurants';

function App() {
  return (
    <>
      <Greeting name="Akila"/>
      <div className="categories">
        <Category imageurl="https://source.unsplash.com/featured/?food" categoryh3="Offers" />
        <Category imageurl="https://source.unsplash.com/featured/?food,sri_lankan" categoryh3="Shri Lankan" />
        <Category imageurl="https://source.unsplash.com/featured/?food,italian" categoryh3="Italian" />
        <Category imageurl="https://source.unsplash.com/featured/?food,indonesian" categoryh3="Indian" />
      </div>
      <Subjectheader subject="Popular Restaurants" />
      <Restaurants imageurl="https://source.unsplash.com/featured/?food,pizza" name="Minute by tuk tuk" stars="(123 ratings)" ratings="4.9" type="Restaurant" origin="Italian"/>
      <Restaurants imageurl="https://source.unsplash.com/featured/?food,brunch" name="Café de Noir" stars="(102 ratings)" ratings="5.5" type="Café" origin="Western"/>
      <Restaurants imageurl="https://source.unsplash.com/featured/?food,bakery" name="Bakes by Tella" stars="(133 ratings)" ratings="4.7" type="Bakery" origin="Western"/>
      <Subjectheader subject="Most Popular" />
    </>
  );
}

export default App;
