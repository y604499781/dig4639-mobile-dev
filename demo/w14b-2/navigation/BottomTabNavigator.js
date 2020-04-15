import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import TodoScreen from '../screens/TodoScreen';
import AddTaskScreen from '../screens/AddTaskScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Todo';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Todo"
        component={TodoScreen}
        options={{
          title: 'Todo List',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-list" />,
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={AddTaskScreen}
        options={{
          title: 'Add Task',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-add" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Todo':
      return 'Todo list';
    case 'Add':
      return 'create new task';
  }
}
