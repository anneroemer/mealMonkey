const Subjectheader = ({ subject }) => {
    return ( 
        <>
            <div className="subjectheader">
                <h1 className="subjectheader__h1">{ subject }</h1>
                <a href="#" className="subjectheader__link" >View all</a>
            </div>
        </>
     );
}
 
export default Subjectheader;