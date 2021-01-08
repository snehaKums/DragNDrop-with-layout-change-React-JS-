import React from 'react';
import './App.css';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...props,changeLayout: false};
  }

  dragStart(e) {
    this.dragged = e.currentTarget;
  }
  dragEnd(e) {
    this.dragged.style.display = 'block';

    e.target.classList.remove("drag-up");
    this.over.classList.remove("drag-up");

    e.target.classList.remove("drag-down");
    this.over.classList.remove("drag-down");
    

    var data = this.state.data;
    var from = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);
    data.splice(to, 0, data.splice(from, 1)[0]);

    data = data.map((doc, index)=> {
      doc.newIndex = index + 1;
      return doc;
    })

    this.setState({data: data});
  }

  dragOver(e) {
    e.preventDefault();

    this.dragged.style.display = "none";
    
    if (e.target.tagName !== "LI") {
      return;
    }


    const dgIndex = JSON.parse(this.dragged.dataset.item).newIndex;
    const taIndex = JSON.parse(e.target.dataset.item).newIndex;
    const animateName = dgIndex > taIndex ? "drag-up" : "drag-down";


    if (this.over && e.target.dataset.item !== this.over.dataset.item) {
      this.over.classList.remove("drag-up", "drag-down");
    }

    if(!e.target.classList.contains(animateName)) {
      e.target.classList.add(animateName);
      this.over = e.target;
    }
  }
  changeLayout=()=> {
    const currentLayout = this.state.changeLayout;
    this.setState({
      changeLayout: !currentLayout
    });
};
  render() {
    var listItems = this.state.data.map((item, i) => {
      return (
        <li 
          data-id={i}
          key={i}
          style={{width:"80px",height: "100px", border: "solid 1px #cccccc", padding:"30px",margin: "10px 30%", borderRadius: "5px", backgroundColor:'gray', color: "#ffffff"}}
          draggable='true'
          onDragEnd={this.dragEnd.bind(this)}
          onDragStart={this.dragStart.bind(this)}
          data-item={JSON.stringify(item)}
        >{item.comp}</li>
      )
     });
     const { changeLayout: changeLayout } = this.state;
    return (
      <div>
        <button onClick={this.changeLayout}>Change Layout</button>

        <ul onDragOver={this.dragOver.bind(this)} className={`main ${changeLayout ? "clicked" : ""}`}>
          {listItems}
        </ul>
      </div>
    )
  }
}