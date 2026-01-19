function Header()
{ 
    function get_barnd_name()
    {
        return "Learn React";
    }
    let brand_name = "Great Learning";
    return(
    <div className="p-5 border-b m-2 border-gray-300">
        <h1 className="text-2xl font-bold underline">Welcome to react basics</h1>
        <p className="font-light"> Wow , we are welcoming you on this website we have created</p>
        <label forHtml=""></label>
        <h1> Brand Name: {brand_name}</h1>
            <h1> Topic : {get_barnd_name}</h1>
    </div>
        )
}
export default Header;