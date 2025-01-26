@echo off
setlocal
set DIR=%~dp0
cd /d %DIR%

if not exist "%DIR%mvnw" (
  echo Error: Maven wrapper scripts not found.
  exit /b 1
)

"%DIR%mvnw" %*
