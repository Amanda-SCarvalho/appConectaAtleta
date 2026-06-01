@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"
node -r ts-node/register src/server.ts
pause
