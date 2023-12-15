import Home from 'src/pages/Home';
import Service from 'src/pages/Service';
import Login from 'src/pages/Login';
import Search from 'src/pages/Search';
import { HeaderOnly } from 'src/components/Layouts';

//routes without login
const publicRoutes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/service',
        component: Service,
    },
    {
        path: '/',
        component: Home,
    },
    {
        path: '/search',
        component: Search,
    },
];

//routes only with login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
