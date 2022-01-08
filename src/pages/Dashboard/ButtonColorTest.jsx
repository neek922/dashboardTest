import React from 'react'
import reactCSS from 'reactcss'
import { CirclePicker } from 'react-color'
import addColor from './addColor';


class CirclePickerExample extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '206',
      g: '174',
      b: '230',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
    let colorAdd = `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`;
    addColor(colorAdd);
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker 
            ?   <div style={ styles.popover }>
                <div style={ styles.cover } onClick={ this.handleClose }/>
                <CirclePicker color={ this.state.color } onChange={ this.handleChange } />
                </div> 
            : null }

      </div>
    )
  }
}

export default CirclePickerExample