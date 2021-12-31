import React from 'react';
import {ListBoxComponent, CheckBoxSelection, Inject} from '@syncfusion/ej2-react-dropdowns';
import {employees} from './data';
import './App.css';

function App() {
  const divStyle = {
    margin: 100,
    width: 300
  }
  return (
    <div style={divStyle}>
      <ListBoxComponent dataSource={employees}
      selectionSettings={{
        mode: "Multiple",
        showCheckbox: true
      }}
      fields={{
        value:"EmployeeID",
        text: "Name"
      }}>
        <Inject services={[CheckBoxSelection]}></Inject>
      </ListBoxComponent>
    </div>
  );
}

export default App;
