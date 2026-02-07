// Script pour créer le fichier .env depuis env.example
// Usage: node create-env.js

const fs = require('fs');
const path = require('path');

const envExamplePath = path.join(__dirname, 'env.example');
const envPath = path.join(__dirname, '.env');

if (fs.existsSync(envPath)) {
    console.log('⚠️  Le fichier .env existe déjà.');
    console.log('Supprimez-le d\'abord si vous voulez le recréer depuis env.example');
    process.exit(0);
}

if (!fs.existsSync(envExamplePath)) {
    console.error('❌ Le fichier env.example n\'existe pas.');
    process.exit(1);
}

try {
    const content = fs.readFileSync(envExamplePath, 'utf8');
    fs.writeFileSync(envPath, content, 'utf8');
    console.log('✅ Fichier .env créé avec succès depuis env.example');
    console.log('📝 N\'oubliez pas de modifier les valeurs dans .env');
} catch (error) {
    console.error('❌ Erreur lors de la création du fichier .env:', error.message);
    process.exit(1);
}


