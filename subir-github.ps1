Write-Host "Inicializando Git..." -ForegroundColor Green
git init

Write-Host "Configurando remote..." -ForegroundColor Green
git remote add origin https://github.com/cocomeza/porfolio.git 2>$null
if ($LASTEXITCODE -ne 0) {
    git remote set-url origin https://github.com/cocomeza/porfolio.git
}

Write-Host "Agregando archivos..." -ForegroundColor Green
git add .

Write-Host "Haciendo commit..." -ForegroundColor Green
git commit -m "Portfolio completo con tests automatizados E2E"

Write-Host "Configurando rama main..." -ForegroundColor Green
git branch -M main

Write-Host "Subiendo a GitHub..." -ForegroundColor Green
git push -u origin main

Write-Host "¡Listo! Revisa GitHub: https://github.com/cocomeza/porfolio" -ForegroundColor Cyan
Read-Host "Presiona Enter para continuar"

