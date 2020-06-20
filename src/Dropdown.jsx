import React from 'react';
import Select from 'react-select';
 
const options = [
  { value: 'Man', label: 'Man' },
  { value: 'Woman', label: 'Woman' }
];
 
class Dropdown extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
 
    return (
        <div style={{width:'200px'}}  >
      <Select 
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
      </div>
    )
    
  }
}
export default Dropdown