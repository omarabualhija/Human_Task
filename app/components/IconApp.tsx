import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import {IconProps} from 'react-native-vector-icons/Icon';

import {StyleSheet, Text, View} from 'react-native';
import {isRTL} from '../common';

interface Iprops extends IconProps {
  type: string;
  // | 'AntDesign'
  // | 'Entypo'
  // | 'EvilIcons'
  // | 'Feather'
  // | 'FontAwesome'
  // | 'FontAwesome5'
  // | 'Fontisto'
  // | 'Foundation'
  // | 'Ionicons'
  // | 'MaterialIcons'
  // | 'MaterialCommunityIcons'
  // | 'Octicons'
  // | 'SimpleLineIcons';
}
const IconApp = ({name, type, color = '#000', size = 20, style}: Iprops) => {
  let _name = name;
  _name =
    name.includes('left') && isRTL ? _name.replace('left', 'right') : _name;

  _name =
    name.includes('right') && isRTL ? _name.replace('right', 'left') : _name;
  _name =
    name.includes('forward') && isRTL
      ? _name.replace('forward', 'back')
      : _name;

  _name =
    name.includes('back') && isRTL ? _name.replace('back', 'forward') : _name;

  switch (type) {
    case 'AntDesign':
      return <AntDesign name={_name} size={size} color={color} style={style} />;
    case 'Entypo':
      return <Entypo name={_name} size={size} color={color} style={style} />;
    case 'EvilIcons':
      return <EvilIcons name={_name} size={size} color={color} style={style} />;
    case 'Feather':
      return <Feather name={_name} size={size} color={color} style={style} />;
    case 'FontAwesome':
      return (
        <FontAwesome name={_name} size={size} color={color} style={style} />
      );
    case 'FontAwesome5':
      return (
        <FontAwesome5 name={_name} size={size} color={color} style={style} />
      );
    case 'Fontisto':
      return <Fontisto name={_name} size={size} color={color} style={style} />;
    case 'Foundation':
      return (
        <Foundation name={_name} size={size} color={color} style={style} />
      );
    case 'Ionicons':
      return <Ionicons name={_name} size={size} color={color} style={style} />;
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={_name}
          size={size}
          color={color}
          style={style}
        />
      );
    case 'MaterialIcons':
      return (
        <MaterialIcons name={_name} size={size} color={color} style={style} />
      );
    case 'Octicons':
      return <Octicons name={_name} size={size} color={color} style={style} />;
    case 'SimpleLineIcons':
      return (
        <SimpleLineIcons name={_name} size={size} color={color} style={style} />
      );
    default:
      return <Zocial name={_name} size={size} color={color} style={style} />;
  }
};

export default IconApp;
