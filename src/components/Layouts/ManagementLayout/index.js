import Header from '../DefaultLayout/Header';
import Navigation from '../components/Navigation';
import Sidebar from './Sidebar';

function ManagementLayout({ children }) {
    return (
        <div>
            <Header />
            <Navigation />
            <div className="container-fluid row">
                <Sidebar />
                <div className="content flex col-md-8">{children}</div>
            </div>
        </div>
    );
}

export default ManagementLayout;
