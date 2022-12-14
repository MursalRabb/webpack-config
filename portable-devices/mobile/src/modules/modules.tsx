import * as React from 'react';
import { Feature, FeatureWithRouterFactory } from '@common-stack/client-react';
import counterModule from '@sample-stack/counter-module-mobile';
import { enableScreens } from 'react-native-screens';
import LayoutModule from '../components/layout/module';
import { renderRoutes2 } from './render';
import { Navigation } from './navigation';

const features = new Feature(FeatureWithRouterFactory, LayoutModule, counterModule);
const configuredRoutes = features.getConfiguredRoutes();
const routes = renderRoutes2({ routes: configuredRoutes }) || [];
enableScreens();

export const MainRoute = () => {
    // for test to make sure `debugger` working.
    debugger
    /**
     * when used renderRoutes2 opts.routes come as empty need to debug that
     * for now using switch directly inroder to render routes properly.
     */
    return (
        <>
            <Navigation />
        </>
    );
};

export default features;
