import '../styles/data.css'
export type Formprop = {
    email: string;
    password: string;
    showdata: boolean;
}

function Data({ email, password, showdata }: Formprop) {
    return (
        <div className="datos">
        <h2>Datos</h2>
        {
        showdata && (
            <>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
            </>
        )
    }
    </div>
    )
}
export default Data;