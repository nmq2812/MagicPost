function Search() {
    return (
        <div className="container d-flex align-items-center w-75" style={{ flexDirection: 'column' }}>
            <h1 className="p-3 m-5">THEO DÕI ĐƠN HÀNG</h1>
            <div className="input-group input-group-lg h-300">
                <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="Nhập từ khóa..."
                    aria-label="Nhập từ khóa"
                    aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary default-color text-white h-100 ms-2" type="button">
                        Tìm kiếm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Search;
