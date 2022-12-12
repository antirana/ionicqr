export interface Usuario{
    uid?:string;
    name:string;
    lastname:string;
    gender:string;
    age:number;
    email:string;
    celular:string;
    direccion:string;
    carrera:string;
    descripcion:string;
    privilegio:string;}

export interface Privilegio{
    privilegio:Rol;

    
}
type Rol = "admin" | "alumno" ;
