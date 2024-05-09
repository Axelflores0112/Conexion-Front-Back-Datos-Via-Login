//Estructura usando props
export type HeaderProps = {
    title: string;
}
function Header({title}: HeaderProps){
    return(
        <header>
            {title}
        </header>
    )
}
export default Header;