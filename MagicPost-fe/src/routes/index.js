import Home from 'src/pages/Home';
import Service from 'src/pages/Service';
import Login from 'src/pages/Login';
import { HeaderOnly } from 'src/components/Layouts';

//routes without login
const publicRoutes = [
    {
        path: '/login',
        component: Login,
        layout: HeaderOnly,
    },
    {
        path: '/service',
        component: Service,
    },
    {
        path: '/',
        component: Home,
    },
];

//routes only with login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
