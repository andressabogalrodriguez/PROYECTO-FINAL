from db import db

class Datos(db.Model):

    __tablename__="PANADERIAS"

    id=db.Column(db.Integer, primary_key=True)
    nombre=db.Column(db.String(50))
    lat=db.Column(db.Float)
    lng=db.Column(db.Float)
    direccion=db.Column(db.String(100))
    descripcion=db.Column(db.String(100))
    def __init__(self, nombre, latitud, longitud, direccion,descripcion):  
        self.nombre=nombre
        self.lat=latitud
        self.lng=longitud
        self.des=direccion
        self.des=descripcion
    def to_dict(self):
        return {
            'id': self.id,
            'nombre': self.nombre,
            'lat': self.lat,
            'lng': self.lng,
            'direccion':self.direccion,
            'des': self.descripcion

        }
