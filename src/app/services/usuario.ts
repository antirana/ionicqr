export interface Usuario{
    uid?:string;
    id?:string;
    name:string;
    lastname:string;
    gender:string;
    age:number;
    email:string;
    celular:string;
    image:string;
    direccion:string;
    carrera:string;
<<<<<<< Updated upstream
    descripcion:string;}
=======
    descripcion:string;
    privilegio:string;}

export interface Privilegio{
    privilegio:Rol;

    
}
export interface Asistencia{
    fecha: string;
    mensaje: string;
}
type Rol = "admin" | "alumno" ;
>>>>>>> Stashed changes
