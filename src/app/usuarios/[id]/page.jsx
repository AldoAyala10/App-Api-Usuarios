import axios from 'axios';
async function getUser(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}
export default async function UsuariosDetalles({ params }) {
    const user = await getUser(params.id);
    return (
        <>
    <h1>Usuarios</h1>
    <table>
    <tbody>
    <tr>
    <td><strong>Id:</strong></td>
     <td>{user.id}</td>
    </tr>
    <tr>
     <td><strong>Nombre:</strong></td>
   <td>{user.name}</td>
    </tr>
    <tr>
    <td><strong>Username:</strong></td>
    <td>{user.username}</td>
    </tr>
     <tr>
     <td><strong>Email:</strong></td>
    <td>{user.email}</td>
     </tr>
     <tr>
     <td><strong>Telefono:</strong></td>
     <td>{user.phone}</td>
    </tr>
    <tr>
    <td><strong>Web:</strong></td>
    <td>{user.website}</td>
    </tr>
     <tr>
    <td><strong>Compañía:</strong></td>
     <td>{user.company.name}</td>
    </tr>
     <tr>
    <td><strong>Direccion:</strong></td>
    <td>{`${user.address.street}, ${user.address.city}`}</td>
    </tr>
                </tbody>
            </table>
        </>
    );
}