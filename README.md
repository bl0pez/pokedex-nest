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
