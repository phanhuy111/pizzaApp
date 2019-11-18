import React from 'react';
import {
  Platform,
  Image,
  View
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, BottomTabBar } from 'react-navigation';

//focusIcon
import promotionIconFocus from '../assets/img/promotion-green-icon.png'
import shopIconFocus from '../assets/img/shop-green-icon.png'
import profileIconFocus from '../assets/img/profile-green-icon.png'
import menuIconFocus from '../assets/img/menu-green-icon.png'

//icon
import promotionIcon from '../assets/img/promotion-gray-icon.png'
import shopIcon from '../assets/img/shop-gray-icon.png'
import profileIcon from '../assets/img/profile-gray-icon.png'
import menuIcon from '../assets/img/menu-gray-icon.png'

import MenuScreen from '../screens/MenuScreen/MenuScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen'
import PromotionScreen from '../screens/PromotionScreen/PromotionScreen'
import ShopScreen from '../screens/ShopScreen/ShopScreen'

import MenuDetailScreen from '../components/MenuScreen/MenuDetail/MenuDetail'
import DeliveryScreen from '../components/MenuScreen/DeliveryScreen/DeliveryScreen'
import CheckoutScreen from '../components/BookingScreen/CheckoutScreen/CheckoutScreen'
import SignUpScreen from '../components/LoginScreen/SignUpScreen/SignUpScreen'
import SignInScreen from '../components/LoginScreen/SignInScreen/SignInScreen'
import SuccessBookingScreen from '../components/BookingScreen/SuccessBookingScreen'
import ChooseShopScreen from '../components/BookingScreen/ChooseShopScreen'
import ForgotPassword from '../components/LoginScreen/ForgotPassword/ForgotPassword'
import RePassword from '../components/LoginScreen/ForgotPassword/RePassword'
import ResendPassword from '../components/LoginScreen/ForgotPassword/ResendPassword'
import SendOtp from '../components/LoginScreen/ForgotPassword/SendOtp'
import ReviewBooking from '../components/BookingScreen/ReviewBooking'

import HistoryOrder from '../components/ProfileScreen/HistoryOrder'
import EditProfileScreen from '../components/ProfileScreen/EditProfileScreen'
import CurrentOrder from '../components/ProfileScreen/CurrentOrder'


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const MenuStack = createStackNavigator(
  {
    Menu: MenuScreen,
    Detail: MenuDetailScreen,
    Delivery: DeliveryScreen,
    Checkout: CheckoutScreen,
    SignUp: SignUpScreen,
    SignIn: SignInScreen,
    SuccessBookingScreen: SuccessBookingScreen,
    ChooseShopScreen: ChooseShopScreen,
    ForgotPassword: ForgotPassword,
    RePassword: RePassword,
    ResendPassword: ResendPassword,
    SendOtp: SendOtp,
    EditProfileScreen: EditProfileScreen,
    HistoryOrder: HistoryOrder,
    CurrentOrder: CurrentOrder,
    ReviewBooking: ReviewBooking
  },
  config
);

MenuStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (
        route.routeName === "SignIn" ||
        route.routeName === "SignUp" ||
        route.routeName === "SendOtp" ||
        route.routeName === "ResendPassword" ||
        route.routeName === "ForgotPassword" ||
        route.routeName === "RePassword" ||
        route.routeName === "ReviewBooking"
      ) {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }
  return {
    tabBarVisible,
    tabBarLabel: 'Thực Đơn',
    tabBarIcon: ({ focused }) => (
      <Image
        source={focused ? menuIconFocus : menuIcon}
        style={{
          width: 18,
          height: 20,
        }}
      />
    ),
    tabBarOptions: {
      // tabStyle: {
      //   borderBottomWidth: 2,
      //   borderBottomColor: '#01703D'
      // },
      activeTintColor: '#A1A1A1',
      inactiveTintColor: '#A1A1A1',
      activeBackgroundColor: '#F2F2F2',
    },
  }
};

MenuStack.path = '';


// const TestStack = createStackNavigator(
//   {
//     ReviewBooking: ReviewBooking
//   },
//   config
// );

// TestStack.navigationOptions = {
//   tabBarLabel: 'Thực Đơn',
//   tabBarIcon: ({ focused }) => (
//     <Image
//       source={focused ? menuIconFocus : menuIcon}
//       style={{
//         width: 18,
//         height: 20
//       }}
//     />
//   ),
//   tabBarOptions: {
//     activeTintColor: '#A1A1A1',
//     inactiveTintColor: '#A1A1A1',
//     activeBackgroundColor: '#F2F2F2',
//   },
// };

// TestStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    EditProfileScreen: EditProfileScreen,
    HistoryOrder: HistoryOrder,
    CurrentOrder: CurrentOrder
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Cá Nhân',
  tabBarIcon: ({ focused }) => (
    <Image
      source={focused ? profileIconFocus : profileIcon}
      style={{
        width: 20,
        height: 20
      }}
    />
  ),
  tabBarOptions: {
    // tabStyle: {
    //   borderBottomWidth: 2,
    //   borderBottomColor: '#01703D'
    // },
    activeTintColor: '#A1A1A1',
    inactiveTintColor: '#A1A1A1',
    activeBackgroundColor: '#F2F2F2',
  },
};

ProfileStack.path = '';

// khuyen mai

const PromotionStack = createStackNavigator(
  {
    Promotion: PromotionScreen,
    // SuccessBookingScreen: SuccessBookingScreen,
    // ChooseShopScreen: ChooseShopScreen
  },
  config
);

PromotionStack.navigationOptions = {
  tabBarLabel: 'Khuyến Mãi',
  tabBarIcon: ({ focused }) => (
    <Image
      source={focused ? promotionIconFocus : promotionIcon}
      style={{
        width: 21.7,
        height: 20
      }}
    />
  ),
  tabBarOptions: {
    // tabStyle: {
    //   borderBottomWidth: 2,
    //   borderBottomColor: '#01703D'
    // },
    activeTintColor: '#A1A1A1',
    inactiveTintColor: '#A1A1A1',
    activeBackgroundColor: '#F2F2F2',
  },
};

PromotionStack.path = '';

// shop

const ShopStack = createStackNavigator(
  {
    Shop: ShopScreen,
  },
  config
);

ShopStack.navigationOptions = {
  tabBarLabel: 'Cửa Hàng',
  tabBarIcon: ({ focused }) => (
    <Image
      source={focused ? shopIconFocus : shopIcon}
      style={{
        width: 22.5,
        height: 20
      }}
    />
  ),
  tabBarOptions: {
    // tabStyle: {
    //   borderBottomWidth: 2,
    //   borderBottomColor: '#01703D'
    // },
    activeTintColor: '#A1A1A1',
    inactiveTintColor: '#A1A1A1',
    activeBackgroundColor: '#F2F2F2',
  },
};

ShopStack.path = '';

// const TabBarComponent = props => {
//   console.log(props)
//   return (
//     <View style={{ flex: 1, flexDirection: 'row' }}>
//       <View>
//         {/* <Image
//           source={focused ? shopIconFocus : shopIcon}
//           style={{
//             width: 22.5,
//             height: 20
//           }}
//         /> */}
//       </View>
//     </View>
//   )
// };

const tabNavigator = createBottomTabNavigator({
  PromotionStack,
  // TestStack,
  MenuStack,
  ShopStack,
  ProfileStack,
},
//   {
//   tabBarComponent: props => {
//   },
//   tabBarOptions: {
//     style: {
//       height: 100
//     }
//   }
// }
);

export default tabNavigator;
