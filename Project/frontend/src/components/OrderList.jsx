const OrderList = (props) => {
    const {Orders} = props;
    return (
        <>
         <h3 className="welcome">{props.ordersType} Orders:</h3>
                {Orders.map((x) =>
                    <div className="row" key={x.orderId}>
                        <div className="col-3"></div>
                        <div className="card col-6">
                            <div className="card-body">
                                <h5 className="text-secondary card-header mb-4">Order #{x.orderId}</h5>
                                <h3 className="card-title">{x.firstName} {x.lastName}</h3>
                                <h4 className="card-text">Phone Number: {x.phone}</h4>
                                <h4 className="card-text">Address: {x.address}</h4>
                                <h4 className="card-text">Number of Items: {x.items.length}</h4>
                                <Link className="btn bg-green btn-lg mt-3" onClick={() => props.onClickOrder(x)} to={"/driver/order"}>Begin Order</Link>
                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>
                )}
        </>
    )

}

export default OrderList;