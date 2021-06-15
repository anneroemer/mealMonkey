const Category = ({ categoryh3, imageurl }) => {
    return ( 
        <>
            <div className="category">
            <img src={ imageurl } width="90px" height="90px" alt="food category" className="category__img"/>
                <h3 className="category__h3">{ categoryh3 }</h3>
            </div>
        </>
     );
}
 
export default Category;