# Script PowerShell pour push automatique vers GitHub
# Usage: .\push-to-github.ps1 "Message de commit"

param(
    [Parameter(Mandatory=$true)]
    [string]$CommitMessage
)

Write-Host "🔄 Vérification des modifications..." -ForegroundColor Cyan

# Vérifier s'il y a des modifications
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "✅ Aucune modification à commiter" -ForegroundColor Green
    exit 0
}

Write-Host "📦 Ajout des fichiers modifiés..." -ForegroundColor Cyan
git add .

Write-Host "💾 Création du commit..." -ForegroundColor Cyan
git commit -m $CommitMessage

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du commit" -ForegroundColor Red
    exit 1
}

Write-Host "🚀 Push vers GitHub..." -ForegroundColor Cyan
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Push réussi vers GitHub !" -ForegroundColor Green
} else {
    Write-Host "❌ Erreur lors du push" -ForegroundColor Red
    exit 1
}

