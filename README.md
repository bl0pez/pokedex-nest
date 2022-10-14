<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Ejecutar en desarrollo
1. Clonar el repositorio
2. Ejecutar
```
npm i
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```

5. Clonar el archivo __.env.template__ y renombrar la copia a __.env__ 

6. llenar las variales de entorno en el ```.env```

7. Ejecutar la aplicación de dev
```
npm start:dev
```

8. Reconstruir la base de datos con la semilla
```
localhost:3000/api/v2/seed
```




##Stack usado
* MongoDB
* NestJS

#

## Apuntes:

## Comando para servir contenido estatito
```
npm i @nestjs/serve-static
```

## Configuración en el archivo app.module.ts para servir el contenido estatico
```
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    })
  ],
})
```

## Comando para levantar el contenedor de docker
```
docker-compose up -d
```

# 
