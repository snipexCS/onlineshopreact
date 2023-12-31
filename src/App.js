import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders:[],
      items: [
        {
          id: 1,
          title: "Ganyu",
          img:'ganyuu.jpg',
          desc: "Фигурка Гань-Юй",
          category: "figurka",
          price: "999",
        },
        {
          id: 2,
          title: "Hu Tao",
          img:'hutao.jpg',
          desc: "Фигурка Ху-тао",
          category: "figurka",
          price: "999",
        },
        {
          id: 3,
          title: "Miko",
          img:'miko.jpg',
          desc: "Фигурка Мико",
          category: "figurka",
          price: "999",
        },
        {
          id: 4,
          title: "Raiden",
          img:'raidenS.jpg',
          desc: "Фигурка Райден",
          category: "figurka",
          price: "999",
        },
        {
          id: 5,
          title: "Xiao",
          img:'xiao.jpg',
          desc: "Фигурка Сяо",
          category: "figurka",
          price: "999",
        },
        {
          id: 5,
          title: "Zhongli",
          img:'chu.jpg',
          desc: "Фигурка Джунли",
          category: "figurka",
          price: "999",
        },
      ],
    };




this.addToOrdder = this.addToOrdder.bind(this)


  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrdder}/>
        <Footer />
      </div>
    );
  }

addToOrdder(item){
 this.setState({orders:[...this.state.orders, item]}
  
 )

 

 
}

}

export default App;
