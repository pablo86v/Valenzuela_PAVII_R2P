
@echo off
echo ################################################################
echo INICIANDO INSTALACION DE PAQUETES DEL SITIO
echo ################################################################
if not exist "./site/node_modules"   call cmd.exe /k "cd site   & npm install & exit" 

echo ################################################################
echo INICIANDO INSTALACION DE PAQUETES DEL SERVIDOR
echo ################################################################
if not exist "./server/node_modules" call cmd.exe /k "cd server & npm install & exit" 

start cmd.exe /k "cd server & npm run server & pause"
start cmd.exe /k "cd site   & npm run site   & pause"


