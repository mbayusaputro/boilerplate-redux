import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {get,getdata} from '../actions/product';

class Home extends Component {

    componentDidMount(){
        this.props.dispatch(get())
      }
      
      toDetail(item) {
        this.props.dispatch(getdata(item))
        this.props.navigation.navigate('Product',{name:item.name})
      }
      
      render(){
        if(this.props.product.isLoading){
          return(
            <Text>Loading...</Text>
          )
        }
        return(
          <View>
            <View>
              <FlatList
                data={this.props.product.data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) =>
                <TouchableOpacity onPress={() => {this.toDetail(item)}} >
                  <Image
                    style={{ width: '100%', height: 100 }}
                    source={{ uri: item.image_url }}
                  />
                  <Text>{item.name}</Text>
                  <Text>{item.title}</Text>
                </TouchableOpacity>
                }          
              />
            </View>
          </View>
        )
      }
      }
      
      const mapStateToProps = (state) => {
        return {
          product: state.product
        }
      }
      
      export default connect(mapStateToProps)(Home);