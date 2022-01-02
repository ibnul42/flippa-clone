import "./collectionItem.scss";

function CollectionItem({ item }) {
    return (
        <div className="col-md-6 col-lg-4 mt-3 mt-md-0">
            <div className="d-flex flex-column collection_item">
                <div className="d-flex justify-content-center py-5 rounded" style={{ backgroundColor: `${item.bgColor}` }}>
                    <h5 className='text-center text-white m-0'>{item.headText}</h5>
                </div>
                <p className="mt-2">{item.text}</p>
            </div>
        </div>
    )
}

export default CollectionItem
