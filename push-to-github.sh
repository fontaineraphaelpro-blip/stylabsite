#!/bin/bash
# Script Bash pour push automatique vers GitHub
# Usage: ./push-to-github.sh "Message de commit"

if [ -z "$1" ]; then
    echo "❌ Usage: ./push-to-github.sh \"Message de commit\""
    exit 1
fi

COMMIT_MESSAGE="$1"

echo "🔄 Vérification des modifications..."

# Vérifier s'il y a des modifications
if [ -z "$(git status --porcelain)" ]; then
    echo "✅ Aucune modification à commiter"
    exit 0
fi

echo "📦 Ajout des fichiers modifiés..."
git add .

echo "💾 Création du commit..."
git commit -m "$COMMIT_MESSAGE"

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors du commit"
    exit 1
fi

echo "🚀 Push vers GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Push réussi vers GitHub !"
else
    echo "❌ Erreur lors du push"
    exit 1
fi

