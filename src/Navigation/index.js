/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useState, useEffect } from 'react';

import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Stack = createNativeStackNavigator();
function AuthRoutes() {

    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={Auth} />
      </Stack.Navigator>
    );
  }
  function StackRoutes() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Stacks" component={Stacks} />
      </Stack.Navigator>
    );
  }

const Routes = () => {
    // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const isAuthenticated = true
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);

    if (loading === true) {
        return <Loading />;
    }
    return isAuthenticated ? <StackRoutes /> : <AuthRoutes />;
};

export default Routes;
const styles = StyleSheet.create({});
