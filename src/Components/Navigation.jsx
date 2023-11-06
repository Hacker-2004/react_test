import { isExportDeclaration } from "typescript";

const Navigation = () =>{
    return(
        <nav>
        <div className="logo">
            <img src="/images/brand_logo.png" alt="logo"/>
        </div>
        <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contect</li>
        </ul>
        <button>login</button>
    </nav>
    );
}
export default Navigation;