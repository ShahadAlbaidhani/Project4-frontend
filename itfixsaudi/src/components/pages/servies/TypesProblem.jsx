import React, { Component } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';


// list of items
const list = [
    { name1: 'SCREEN' ,img1:'https://cshprod.s3.amazonaws.com/imageLibrary/Mask_Group_135_f84f5361531b.png'},
    { name1: 'BATTERY' ,img1:'https://cshprod.s3.amazonaws.com/imageLibrary/Mask_Group_137_5d508ad10928.png'},
    { name1: 'MIC' ,img1:'https://cshprod.s3.amazonaws.com/imageLibrary/Mask_Group_136_7ea925bb0d28.png'},
    { name1: 'RECEIVER' ,img1:'https://cshprod.s3.amazonaws.com/imageLibrary/Mask_Group_141_aef400ec33c8.png'},
    { name1: 'SPEAKER' ,img1:'https://cshprod.s3.amazonaws.com/imageLibrary/Mask_Group_138_4604c5485357.png'},
    { name1: 'CHARGING JACK' ,img1:'https://cshprod.s3.amazonaws.com/imageLibrary/Mask_Group_139_f431a49aefba.png'},
    { name1: 'PROXIMITY SENSOR' ,img1:'https://cshprod.s3.amazonaws.com/imageLibrary/Group_1522x_b3591892023a.png'},
    { name1: 'AUX JACK' ,img1:'https://cshprod.s3.amazonaws.com/imageLibrary/mask-group-1512x_f3bb15ce6426.png'},

   
  ];
  
  // One item component
  // selected prop will be passed
  const MenuItem = ({text, img,selected}) => {
    return <div
      className={`menu-item ${selected ? 'active' : ''}`}
      >
            <img class="img-item" src={img}/>
           <div> <h6 class="h-item">{text}</h6></div>

      </div>;
  };
  
  // All items component
  // Important! add unique key
  export const Menu = (list, selected) =>
    list.map(el => {
      const {name1 ,img1} = el;
  
      return <MenuItem text={name1} key={name1} img={img1} key={img1} selected={selected} />;
    });
  
  
  const Arrow = ({ text,className }) => {
    return (

      <div className={className}>{text}
      </div>
    );
  };
  
  
  const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
  const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
  
  const selected = 'item1';
  
  class TypesProblem extends Component {
    constructor(props) {
      super(props);
      // call it again if items count changes
      this.menuItems = Menu(list, selected);
    }
  
    state = {
      selected
    };
  
    onSelect = key => {
      this.setState({ selected: key });
    }
  
  
    render() {
      const { selected } = this.state;
      // Create menu from items
      const menu = this.menuItems;
  
      return (
        <div   className="App mt-5">
          <h1 style={{fontSize:'50px'}} className='h-item'> Our Servies</h1>
          <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
        </div>
      );
    }
  }

export default TypesProblem
