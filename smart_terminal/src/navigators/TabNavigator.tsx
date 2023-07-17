import React from "react";
import { createBottomTabNavigator, BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import Keypad from "../views/Keypad";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Payments from "../views/Payments";

type CustomTabOptions = { headerShown: boolean; tabBarLabel: string; iconName: string; iconType: string };

const Tab = createBottomTabNavigator();
const getScreenOptions = (options: CustomTabOptions) => options;

const TabBarComponent: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const { tabBarLabel, iconName, iconType } = options as CustomTabOptions;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity key={route.key} style={[styles.tabButton, isFocused && styles.tabButtonFocused]} onPress={onPress}>
            <Icon name={iconName} type={iconType} color={"#737B92"} size={20} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBarComponent {...props} />}>
      <Tab.Screen
        name="Payments"
        component={Payments}
        options={getScreenOptions({
          headerShown: false,
          tabBarLabel: "Point-of-Sale",
          iconName: "credit-card-alt",
          iconType: "font-awesome",
        })}
      />
      <Tab.Screen
        name="Transactions"
        component={Keypad}
        options={getScreenOptions({
          headerShown: false,
          tabBarLabel: "My Transactions",
          iconName: "receipt",
          iconType: "FontAwesome5",
        })}
      />
      <Tab.Screen
        name="Bluethoot"
        component={Keypad}
        options={getScreenOptions({
          headerShown: false,
          tabBarLabel: "Connected",
          iconName: "bluetooth-b",
          iconType: "font-awesome",
        })}
      />
      <Tab.Screen
        name="Menu"
        component={Keypad}
        options={getScreenOptions({
          headerShown: false,
          tabBarLabel: "Menu",
          iconName: "menu",
          iconType: "ntypo",
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    justifyContent: "space-around",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  tabButtonFocused: {
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: "#EEF0F4",
    borderRadius: 10,
    height: 60,
  },
  tabLabel: {
    fontSize: 12,
    color: "#737B92",
    marginTop: 5,
  },
  tabLabelFocused: {
    color: "#33CD48",
  },
});
