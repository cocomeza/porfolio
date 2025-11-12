@echo off
echo Inicializando Git...
git init

echo Configurando remote...
git remote add origin https://github.com/cocomeza/porfolio.git 2>nul || git remote set-url origin https://github.com/cocomeza/porfolio.git

echo Agregando archivos...
git add .

echo Haciendo commit...
git commit -m "Portfolio completo con tests automatizados E2E"

echo Configurando rama main...
git branch -M main

echo Subiendo a GitHub...
git push -u origin main

echo ¡Listo! Revisa GitHub: https://github.com/cocomeza/porfolio
pause

