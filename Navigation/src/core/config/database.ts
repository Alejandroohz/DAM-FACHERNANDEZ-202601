import { open } from "react-native-quick-sqlite";

export const db = open({
    name: 'navigation_database.sqlite'
});


export const setupDatabase = () => {
    try {
        db.execute(
            `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT,
            username TEXT,
            correo TEXT,
            fechaNacimiento TEXT,
            contrasena TEXT
        );
        `);

    } catch(error){
        console.error('No se pudo inicilizar la BD', error)
    }
}