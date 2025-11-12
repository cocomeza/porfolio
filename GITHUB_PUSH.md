# Comandos para subir a GitHub

Ejecuta estos comandos en orden en tu terminal:

```bash
# 1. Inicializar git (si no está inicializado)
git init

# 2. Agregar el remote de GitHub
git remote add origin https://github.com/cocomeza/porfolio.git

# 3. Agregar todos los archivos
git add .

# 4. Hacer commit inicial
git commit -m "Portfolio completo con tests automatizados E2E"

# 5. Cambiar a rama main (si es necesario)
git branch -M main

# 6. Subir a GitHub
git push -u origin main
```

Si el repositorio ya tiene contenido, usa:
```bash
git push -u origin main --force
```

