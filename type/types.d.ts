import { NavigatorScreenParams } from '@react-navigation/native';

type TabsParamList = {
  Dashboard: undefined;
};

type DrawerParamList = {
  Tabs: NavigatorScreenParams<TabsParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends DrawerParamList {}
  }
}