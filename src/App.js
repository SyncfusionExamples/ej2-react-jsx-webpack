import React, { Component } from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { SplitterComponent, PanesDirective, PaneDirective } from '@syncfusion/ej2-react-layouts';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
class App extends Component {
  constructor(props) {
    super(props);
    this.count = 4;
    this.cellSpacing = [10, 10];
    this.sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
    this.dropDownObj;
    this.state = {
      hideDialog: false,
      selectedRadioButton: 'original'
    };
    this.fields = "value";

    this.dataList = ["Item 1", "Item 2", "Item 3"];

    this.modifiedDataList = ["Modified Item 1", "Modified Item 2", "Modified Item 3"];

    this.listViewContent = this.listViewContent.bind(this);
    this.listViewContent2 = this.listViewContent2.bind(this);
  }
  stringContent() {
    return <div>This is string content</div>;
  }

  listViewContent() {
        return (<div>
          <h3>This is original content</h3>
          <ListViewComponent id="sample-list-flat" dataSource={this.dataList}></ListViewComponent>
      </div>);
    }

    listViewContent2() {
        return (<div>
           <h3>This is modified content</h3>
           <ListViewComponent id="sample-list-flat" dataSource={this.modifiedDataList}></ListViewComponent>
      </div>);
    }

    textContent() {
      console.log('Re-rendered');
        return (<div>
        <div className="content">
          Dummy content in pane 2 to display the splitter
        </div>
      </div>); 
    }
    radioButtonClick(e){
        this.setState({ selectedRadioButton: e.target.value });
    }
  
  render() {
    return (
      <React.Fragment>
        {/* <DropDownListComponent id="ddlelement" dataSource={this.sportsData} ref={ instance => { this.dropDownObj = instance; }} placeholder="Select a game" value="Badminton"/> */}
        <div>
          <div>
            <h5>Switch back and forth between the radio button choices.</h5>
            <input type="radio" name="r1" onChange={this.radioButtonClick.bind(this)} value="original" /> Original Content<br/>
            <input type="radio" name="r1" value="modified" onChange={this.radioButtonClick.bind(this)} /> Modified Content<br/>
            <input type="radio" name="r1" value="string" onChange={this.radioButtonClick.bind(this)} /> String Content
          </div>
          <SplitterComponent separatorSize={3} id="vertical" height="100%" width='100%'>
            <PanesDirective>
              <PaneDirective min="50px" size='240px' content= {{ template: (this.state.selectedRadioButton == "string" ? this.stringContent : this.state.selectedRadioButton == "original" ? this.listViewContent : this.listViewContent2), data: this.state.selectedRadioButton }} />
              <PaneDirective collapsible = {true} min="50px" size='200px' content={this.textContent.bind(this)}/>
            </PanesDirective>
          </SplitterComponent>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
