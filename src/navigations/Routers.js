import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Splash from '../containers/Splash';

const MyTransitionSpec = {
  duration: 500,
};

const MyTransitionSpecs = {
  duration: 100,
};

const transitionConfig = () => ({
  transitionSpec: MyTransitionSpec,
  screenInterpolator: (sceneProps) => {
    const { layout, position, scene } = sceneProps;
    const { index } = scene;
    const width = layout.initWidth;

    const inputRange = [index - 1, index, index + 1];

    const opacity = position.interpolate({
      inputRange,
      outputRange: [0, 1, 0],
    });

    const translateX = position.interpolate({
      inputRange,
      outputRange: [width, 0, 0],
    });

    return {
      opacity,
      transform: [{ translateX }],
    };
  },
});

const transitionConfigOpacity = () => ({
  transitionSpec: MyTransitionSpecs,
  screenInterpolator: (sceneProps) => {
    const { layout, position, scene } = sceneProps;
    const { index } = scene;
    const width = layout.initWidth;

    const inputRange = [index - 1, index, index + 1];

    const opacity = position.interpolate({
      inputRange,
      outputRange: [0, 1, 0],
    });

    return {
      opacity,
    };
  },
});

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" transitionConfig={transitionConfig}>
        <Scene key="splash" component={Splash} initial hideNavBar={true} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
