const connection = require("../libs/mysql");
const bcrypt = require('bcrypt');

class EmpleadoService {
  constructor() {}

   async create(payload,callback) {
      const hash = await bcrypt.hash(payload.password,10);
      const sql = "INSERT INTO empleado (nombre_completo,edad,apto,estado,password,departamento,identificacion) VALUES (?,?,?,?,?,?,?);";
      connection.query(sql,
        [
          payload.nombre_completo,
          payload.edad,
          payload.apto,
          payload.estado,
          hash,
          payload.departamento,
          payload.identificacion,
        ],
        (result,fields) =>{
            callback(fields);
        });
  }

  find(callback) {
        connection.query("SELECT * FROM empleado", (error,result) =>{
        callback(result);
     });
  }

  findOne(id,callback) {
        connection.query("SELECT * FROM empleado WHERE id = ?",id,(result,fields) => {
        callback(fields);
    });
  }

  async update(id, payload, callback) {
        const sql = "UPDATE empleado SET nombre_completo=?,edad=?,apto=?,estado=?,password=?,departamento=?,identificacion=? WHERE id = ?";
        const hash = await bcrypt.hash(payload.password,10);
        connection.query(sql,[
            payload.nombre_completo,
            payload.edad,
            payload.apto,
            payload.estado,
            hash,
            payload.departamento,
            payload.identificacion,
            parseInt(id,10),
        ],(result,fields) => {
            callback(fields);
        });
  }

  delete(id, callback) {
        const sql = "DELETE FROM empleado WHERE id = ?";
        connection.query(sql,id, (results,fields) => {
        callback(fields);
     });
  }
}
module.exports = EmpleadoService;
