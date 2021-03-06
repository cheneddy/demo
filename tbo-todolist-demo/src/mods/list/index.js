import {createElement, render, Component} from 'rax';
import View from 'tboc-view';
import Image from 'tboc-image';
import Input from 'tboc-input';
import Text from 'tboc-text';
import Icon from 'tboc-icon';
import styles from './style.js';

import Item from '../item/index';

export default class ListBox extends Component {

  state = {
    data: this.props.data,
    type: this.props.type
  }
  
  componentWillReceiveProps(props) {
    this.setState({
      data: props.data
    });
  }
  
  toggleStar = (id) => {
    this.props.toggleStar && this.props.toggleStar(id);
  }
  
  toggleDone = (id, checked) => {
    this.props.toggleDone && this.props.toggleDone(id, checked);
  }
  
  finishInput = (id, val) => {
    this.props.finishInput && this.props.finishInput(id, val);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {
          this.state.data.map((item) => {
            return (
              <Item 
                item={item}
                type={this.props.type}
                toggleStar={this.toggleStar}
                toggleDone={this.toggleDone}
                finishInput={this.finishInput}
              />
            );
          })
        }
      </View>
    )
  }

}