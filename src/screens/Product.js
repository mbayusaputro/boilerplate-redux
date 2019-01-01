import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';

class Product extends Component {

    static navigationOptions = ({navigation}) => {
        return {
          title: navigation.getParam('name')
        }
      };
    
    render(){
        return(
            <View>
              <Image
                style={{ width: '100%', height: 100 }}
                source={{ uri: this.props.product.result.image_result }}
              />
              <Text>{this.props.product.result.name}</Text>
              <Text>{this.props.product.result.price}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      product: state.product
    }
  }
  
  export default connect(mapStateToProps)(Product);